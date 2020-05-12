import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Icon = () => {
  const data = useStaticQuery(graphql`
    query {
      file: file(absolutePath: { regex: "/icon.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div>
      <Image
        fixed={data.file.childImageSharp.fixed}
        style={{
          margin: "100px auto",
          display: "block",
          borderRadius: `100%`,
        }}
      />
    </div>
  )
}

export default Icon
