export interface User {
  id: string;
  email: string;
  displayName: string;
  age?: number;
  preferences: UserPreferences;
  isPlusUser: boolean;
  createdAt: string;
}

export interface UserPreferences {
  categories: DrinkCategory[];
  temperature: 'hot' | 'iced' | 'both';
  dietaryFilters: string[];
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
}

export type DrinkCategory = 'coffee' | 'tea' | 'mocktails' | 'cocktails' | 'smoothies' | 'boba';

export interface Recipe {
  id: string;
  name: string;
  category: DrinkCategory;
  difficulty: 'easy' | 'medium' | 'hard';
  prepTime: number;
  imageUrl: string;
  isPlusOnly: boolean;
  tags: string[];
  ingredients: Ingredient[];
  steps: AnimationStep[];
  customizationOptions: CustomizationOptions;
}

export interface Ingredient {
  id: string;
  name: string;
  amount: string;
  unit: string;
  optional?: boolean;
}

export interface AnimationStep {
  id: string;
  action: string;
  description: string;
  animationFile: string;
  duration: number;
  ingredients?: string[];
}

export interface CustomizationOptions {
  cupSize: string[];
  milkType: string[];
  temperature: string[];
  sweetness: string[];
  toppings: string[];
}

export interface SavedDrink {
  id: string;
  recipeId: string;
  userId: string;
  customizations: Record<string, string>;
  imageUrl?: string;
  name?: string;
  createdAt: string;
  isFavorite: boolean;
}