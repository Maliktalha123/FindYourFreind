"use server";

import { revalidatePath } from "next/cache";

export const addEvent = async (eventObject) => {
  const added = await fetch(`${process.env.BASE_URL}api/events`, {
    method: "POST",
    body: JSON.stringify(eventObject),
  });
  revalidatePath("/admin/event");
};

export const getEvent = async () => {
  let events = await fetch(`${process.env.BASE_URL}api/events`);
  events = await events.json();
  console.log("Events Successfully fetched...");
  return events;
  revalidatePath("/admin/events");
};
