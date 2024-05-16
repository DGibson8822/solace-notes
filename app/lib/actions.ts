"use server";

import { sql } from "@vercel/postgres";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const NoteFormSchema = z.object({
  title: z.string().max(50, {
    message: "Title exceeds maximum length of 50, please shorten it.",
  }),
  content: z
    .string()
    .min(20, {
      message: "Please enter content for the note.",
    })
    .max(300, {
      message: "Content exceeds maximum length of 3, please shorten it.",
    }),
});

export type State = {
  errors?: {
    title?: string[];
    content?: string[];
  };
  message?: string | null;
};

export async function createNote(prevState: State, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = NoteFormSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Fields failed validation. Failed to create note.",
    };
  }

  const { title, content } = validatedFields.data;

  // Attempt database insertion.
  try {
    await sql`
        INSERT INTO notes (title, content)
        VALUES (${title ? title : "Untitled"}, ${content} )
      `;
  } catch (error) {
    return {
      message: "Database Error: Failed to create note.",
    };
  }

  // Revalidate the cache for the Notes page and redirect the user.
  revalidatePath("/");
  redirect("/");
}

export async function updateNote(id: string, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = NoteFormSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Fields failed validation. Failed to update note.",
    };
  }

  const { title, content } = validatedFields.data;

  // Attempt database insertion.
  try {
    await sql`
        UPDATE notes
        SET title = ${title}, content = ${content}, updated_at = NOW()
        WHERE id = ${id}
      `;
  } catch (error) {
    console.log(error);
    return {
      message: "Database Error: Failed to create note.",
    };
  }

  // Revalidate the cache for the notes page and redirect the user.
  revalidatePath("/");
  redirect("/");
}

export async function deleteNote(id: string) {
  try {
    await sql`DELETE FROM notes WHERE id = ${id}`;
  } catch (error) {
    return { message: "Database Error: Failed to Delete Note." };
  }
  revalidatePath("/");
  redirect("/");
}
