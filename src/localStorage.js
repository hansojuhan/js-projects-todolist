// Loads tasks from local storage and returns it or empty array, if not found
export function loadTasksFromLocal() {
  // Retrieve categories
  const savedTasks = localStorage.getItem('tasks');

  // If result is valid, parse it, otherwise return an empty array
  try {
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch (error) {
    console.error("Error parsing categories from localStorage:", error);
    return [];
  }
}

// Loads categories from local storage and returns it or empty array, if not found
export function loadCategoriesFromLocal() {
  // Retrieve categories
  let savedCategories = localStorage.getItem('categories');

  // If result is valid, parse it, otherwise return an empty array
  try {
    return savedCategories ? JSON.parse(savedCategories) : [];
  } catch (error) {
    console.error("Error parsing categories from localStorage:", error);
    return [];
  }
}

// Updates the tasks saved locally by removing the previous and resaving it
export function saveTasksToLocal(tasks) {
  // Check if tasks already exists, if yes, remove it
  if (localStorage.getItem('tasks')) {
    localStorage.removeItem('tasks');
  }

  // Stringify the tasks array and save it
  localStorage.setItem("tasks", JSON.stringify(tasks));

  console.log("Categories saved to local:", localStorage.getItem('tasks'));
}

// Updates the categories saved locally by removing the previous and resaving it
export function saveCategoriesToLocal(categories) {
  // Check if categories already exists, if yes, remove it
  if (localStorage.getItem('categories')) {
    localStorage.removeItem('categories');
  }

  // Stringify the tasks array and save it
  localStorage.setItem("categories", JSON.stringify(categories));

  console.log("Categories saved to local:", categories);
}

// Looks for a category in local storage by id and returns it, if found.
export function getCategoryById(categoryId) {
  // Retrieve
  const storedCategories = localStorage.getItem('categories');

  // Check if categories exists
  if (!storedCategories) {
    console.log(`Category id:${categoryId} not found in local storage!`);
    return null;
  }

  // Parse and find
  const categories = JSON.parse(storedCategories)
  const category = categories.find(c => c.id == categoryId);

  if (category) {
    return category;
  } else {
    console.log(`Category with id: ${categoryId} not found!`);
    return null;
  }
}
