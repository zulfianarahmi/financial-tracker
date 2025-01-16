import React from "react";
import style from "./stylef.css";

const Feature = () => {
  return (
    <div>
      <header>
        <h1>Features</h1>
      </header>

      <section class="features">
        <div class="feature-item">
          <h2>💰 Daily Expense Tracking</h2>
          <p>
            Easily input and organize your daily financial transactions. Keep
            track of where your money goes and what comes in.
          </p>
        </div>
        <div class="feature-item">
          <h2>📊 Weekly & Category Filters</h2>
          <p>
            Analyze your spending habits by filtering data by week or category.
            Identify trends and manage your budget effectively.
          </p>
        </div>
        <div class="feature-item">
          <h2>📆 Expense Summaries</h2>
          <p>
            View total expenses for weekly or monthly periods in just a few
            clicks. Get a clear picture of your overall spending.
          </p>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Financial Tracker. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Feature;
