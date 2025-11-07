import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://sfeaqafqgkgugcdwavdo.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmZWFxYWZxZ2tndWdjZHdhdmRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MDg3MDQsImV4cCI6MjA3ODA4NDcwNH0.5BdEck-RFrePdJLH6s1ocstZ-MAT6EjEjhXcB766GsE";
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function loadCourses() {
  const { data: courses, error } = await db.from("courses").select("*");

  if (error) {
    console.error("Error loading courses:", error);
    return;
  }

  console.log("Courses:", courses);

  const container = document.getElementById("courses-list");
  if (container) {
    container.innerHTML = courses
      .map(
        (course) => `
        <div class="course-card">
          <h3>${course.title}</h3>
          <p>${course.description}</p>
          <button class="btn btn-outline">Enroll</button>
        </div>`
      )
      .join("");
  }
}

loadCourses();
