'use client';

import { useFormState } from 'react-dom';
import { createStartup } from '@/lib/actions';
import Link from 'next/link';

const initialState = {
  error: '',
  success: false,
};

export default function StartupForm() {
  const [state, formAction] = useFormState(createStartup, initialState);

  return (
    <>
      {state?.error && (
        <div className="mb-6 p-4 bg-destructive/10 border border-destructive text-destructive rounded-lg">
          {state.error}
        </div>
      )}
      
      {state?.success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-500 text-green-700 rounded-lg">
          Startup created successfully! Redirecting...
        </div>
      )}

      <form action={formAction} className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 space-y-8">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-lg font-semibold text-foreground mb-3">
            Title <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            placeholder="Enter your startup name or idea title"
            className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground placeholder:text-muted-foreground transition-all"
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-lg font-semibold text-foreground mb-3">
            Category <span className="text-destructive">*</span>
          </label>
          <select
            id="category"
            name="category"
            required
            className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground bg-white transition-all"
          >
            <option value="">Select a category</option>
            <option value="technology">Technology</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Finance</option>
            <option value="education">Education</option>
            <option value="ecommerce">E-commerce</option>
            <option value="saas">SaaS</option>
            <option value="social">Social Media</option>
            <option value="ai">AI/ML</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-lg font-semibold text-foreground mb-3">
            Description <span className="text-destructive">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={6}
            placeholder="Describe your startup idea, the problem it solves, and your target audience..."
            className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground placeholder:text-muted-foreground resize-none transition-all"
          />
          <p className="text-sm text-muted-foreground mt-2">
            Minimum 100 characters
          </p>
        </div>

        {/* Image URL */}
        <div>
          <label htmlFor="image" className="block text-lg font-semibold text-foreground mb-3">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            placeholder="https://example.com/image.jpg"
            className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground placeholder:text-muted-foreground transition-all"
          />
          <p className="text-sm text-muted-foreground mt-2">
            Optional: Add an image to make your post stand out
          </p>
        </div>

        {/* Pitch/Link */}
        <div>
          <label htmlFor="pitch" className="block text-lg font-semibold text-foreground mb-3">
            Pitch or Website Link
          </label>
          <input
            type="url"
            id="pitch"
            name="pitch"
            placeholder="https://your-website.com or pitch deck link"
            className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground placeholder:text-muted-foreground transition-all"
          />
        </div>

        {/* Stage */}
        <div>
          <label htmlFor="stage" className="block text-lg font-semibold text-foreground mb-3">
            Current Stage
          </label>
          <select
            id="stage"
            name="stage"
            className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground bg-white transition-all"
          >
            <option value="idea">Idea Stage</option>
            <option value="prototype">Prototype</option>
            <option value="mvp">MVP</option>
            <option value="launched">Launched</option>
            <option value="scaling">Scaling</option>
          </select>
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <button
            type="submit"
            className="flex-1 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Submit Your Idea
          </button>
          <Link href="/" className="flex-1">
            <button
              type="button"
              className="w-full border-2 border-border text-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-muted transition-colors"
            >
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </>
  );
}
