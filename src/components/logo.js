import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file: file(absolutePath: { regex: "/my_portfolio.png/" }) {
        childImageSharp {
          fixed(width: 500, height: 500) {
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
          margin: "10px auto",
          display: "block",
        }}
      />
    </div>
  )
}

export default Logo
