import { BlogPosts } from 'app/components/posts'
import Image from 'next/image';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Simon Wang
      </h1>
      <div className="my-8">
        <Image
          src="/images/simon.jpg" // Path to the image (can be in public directory)
          alt="Description of the image"
          width={400} // Set the desired width
          height={300} // Set the desired height
          className="rounded-lg shadow-md" // Optional: Tailwind classes for styling
        />
      </div>
      <p className="mb-4">
        {
        "Welcome to my little blog! Here is where I will share my thoughts on various topics I am interested in; tech, art, artificial intelligence, and anything in between!"
        }
        
      </p>
      <p className="mb-4">
        {
          "In my day-to-day, I am a "
        }
        <b>
          {
            "Computer Science Master's student"      
          }
        </b>
        {
          " at the University of Maryland - College Park. For more info please check out my work in AI/ML and more here on my "
        }
        {
          <a href="https://simoncwang.github.io/" target="_blank">
          technical portfolio site!
        </a>
        }
      </p>
     <p className="mb-4">
        <b>
          {
            "An important note:"      
          }
        </b>
        {
          " my opinions and thoughts expressed here are not a representation of my university nor any of my colleagues!"
        }
        </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
