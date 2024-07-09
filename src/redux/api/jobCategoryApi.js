// src/api/jobCategoryAPI.js
import { BASE_URL } from "./api.js";

export const fetchJobCategories = async () => {
    const response = await fetch(`${BASE_URL}job_categories/`);
    if (!response.ok) {
        const errorBody = await response.text(); // Assuming the error message is in text format
        throw new Error(errorBody || "Failed to fetch job categories");
    }
    return await response.json();
};
