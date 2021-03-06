/*eslint-disable*/

import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Menu from '../components/menu';
import BackButton from '../components/backButton';
import backButton from '../components/backButton';


export default ({ data }) => {
  const { node } = data.allMarkdownRemark.edges[0];
  const { html } = node;

  console.log(html);
  return (
    <div className='npm'>
      <div className="ingridPage">
        <img src="https://i.ibb.co/XjjVB8z/Ingrid-Big-BG.png" />
        {/* <img src="https://karandeepahluwalia.github.io/face.jpg" /> */}
      </div>
      <p id="headingText">GEIST</p>
      <p id="subText">Software Solutions</p>
      <div className="packageWrapper">
        <div className="packageClass">
          <BackButton />
          <div className="packageLogos">
            <img src="https://i.ibb.co/pWcLWhB/Screen-Shot-2020-02-20-at-2-24-56-PM.png"></img>
          </div>
          <div id='content'
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  );
};

export const pageQuery = graphql`
query connextQuery {
  allMarkdownRemark(filter: {frontmatter: {title: {eq: "connext"}}}) {
    edges {
      node {
        frontmatter {
          path
        }
        html
      }
    }
  }
}
`;
