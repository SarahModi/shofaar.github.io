import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://your-project.supabase.co"; // replace
const SUPABASE_ANON_KEY = "your-anon-key"; // replace
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function loadCourses() {
  const { data: courses, error } = await db.from("courses").select("*");

  if (error) {
    console.error("Error loading courses:", error);
    return;
  }

  console.log("Courses:", courses); // you’ll see them in your browser console

  const container = document.getElementById("courses");
  if (container) {
    container.innerHTML = courses
      .map(
        (course) => `
        <div class="course-card">
          <h3>${course.title}</h3>
          <p>${course.description}</p>
          <small>${course.level}</small>
        </div>`
      )
      .join("");
  }
}

loadCourses();
