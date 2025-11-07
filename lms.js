// Tell browser this is a module when you import it in HTML
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// 🔑 Your actual Supabase project details
const SUPABASE_URL = "https://your-project.supabase.co"; // <-- replace with your URL
const SUPABASE_ANON_KEY = "your-anon-key"; // <-- replace with your anon key

// ✅ Initialize Supabase
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 🎓 Fetch and show courses
async function loadCourses() {
  const { data: courses, error } = await db.from("courses").select("*");

  if (error) {
    console.error("Error loading courses:", error);
    return;
  }

  console.log("Courses:", courses);

  // If you want to show them on your page
  const container = document.getElementById("courses");
  if (container) {
    container.innerHTML = courses
      .map(
        (course) => `
        <div class="course-card">
          <h3>${course.title}</h3>
          <p>${course.description}</p>
        </div>`
      )
      .join("");
  }
}

// Run it
loadCourses();
