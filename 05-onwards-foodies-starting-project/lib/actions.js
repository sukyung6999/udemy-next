'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { isValidElement } from 'react';

function inValidText(text) {
  return !meal.title || meal.title.trim() === '';
}

export async function shareMeal(formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    inValidText(meal.title) ||
    isValidElement(meal.summary) ||
    isValidElement(meal.instructions) ||
    isValidElement(meal.creator) ||
    isValidElement(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.images.size === 0
  ) {
    throw new Error('Invalid Input');
  }

  await saveMeal(meal);
  redirect('/meals');
}
