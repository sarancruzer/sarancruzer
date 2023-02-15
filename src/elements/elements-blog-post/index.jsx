import React from 'react';
// internal
import ElementBreadcrumb from '@components/common/breadcrumb/element-breadcrumb';
import BlogStandardEl from './blog-standard-el';
import BlogGridEl from './blog-grid-el';
import BlogGridBorderEl from './blog-grid-border-el';
import BlogListEl from './blog-list-el';
import BlogMasonryEl from './blog-masonry-el';

const ElementsBlogPostMain = () => {
  return (
    <React.Fragment>
      <ElementBreadcrumb title="Have a look to our blog post" />
      <BlogStandardEl/>
      <BlogGridEl/>
      <BlogGridBorderEl/>
      <BlogListEl/>
      <BlogMasonryEl/>
    </React.Fragment>
  );
};

export default ElementsBlogPostMain;