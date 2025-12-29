import { promises as fs } from "fs"
import { compileMDX } from "next-mdx-remote/rsc"
import path from "path"

type FrontMatter = {
  title: string,
  description: string,
  image: string,
  date: string
}

export const getSingleBlog = async (slug: string) => {
  const singleBlog = await fs.readFile(path.join(process.cwd(), "app/data", `${slug}.mdx`), "utf-8")
  return singleBlog
}

export const getBlogs = async () => {
  const files = await fs.readdir(path.join(process.cwd(), "app/data"))
  const allBlogs = await Promise.all(files.map(
    async file => {
      const slug = file.replace(".mdx", "")
      const frontmatter = await getSingleBlogByFrontmatter(slug)
      return {slug, ...frontmatter}
    }
  ))
  return allBlogs
}

export const getSingleBlogByFrontmatter = async (slug: string) => {
  const singleBlog = await fs.readFile(path.join(process.cwd(), "app/data", `${slug}.mdx`), "utf-8")
  const {frontmatter} = await compileMDX<FrontMatter>({
    source: singleBlog,
    options: {parseFrontmatter: true}
  })  
  return frontmatter
}