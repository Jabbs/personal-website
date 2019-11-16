module ApplicationHelper
  def title_tags
    content_tag(:title, title)
  end

  def meta_tags
    content_tag(:meta, nil, 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8') +
    content_tag(:meta, nil, name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no') +
    content_tag(:meta, nil, name: 'keywords', content: keywords) +
    content_tag(:meta, nil, property: 'og:site_name', content: 'Jabbs.co') +
    content_tag(:meta, nil, property: 'og:title', content: title) +
    content_tag(:meta, nil, property: 'og:description', content: description) +
    content_tag(:meta, nil, property: 'og:url', content: request.original_url) +
    content_tag(:meta, nil, property: 'og:image', content: image) +
    content_tag(:meta, nil, property: 'og:type', content: 'website') +
    content_tag(:meta, nil, name: 'twitter:site', content: '@petejabbour') +
    content_tag(:meta, nil, name: 'twitter:card', content: 'summary_large_image') +
    content_tag(:meta, nil, name: 'twitter:title', content: title) +
    content_tag(:meta, nil, name: 'twitter:description', content: description) +
    content_tag(:meta, nil, name: 'twitter:image', content: image) +
    content_tag(:meta, nil, itemprop: 'name', content: title) +
    content_tag(:meta, nil, itemprop: 'description', content: description) +
    content_tag(:meta, nil, itemprop: 'image', content: image) +
    content_tag(:meta, nil, name: 'title', content: title) +
    content_tag(:meta, nil, name: 'description', content: description) +
    content_tag(:meta, nil, name: 'robots', content: 'index,follow')
  end

  def link_tags
    content_tag(:link, nil, href: image, rel: 'image_src').html_safe
  end

  private

  def title
    title = content_for?(:title) ? strip_tags(content_for(:title)).html_safe  : "Pete Jabbour | Full-Stack Ruby and Javascript Engineer"
    title.strip
  end

  def description
    "Chicago web developer and full-stack engineer for hire. I build modern web applications with Ruby, Ruby on Rails, Javascript, React, and PostgreSQL"
  end

  def keywords
    "Chicago,Web Developer,Software Engineer,Full-stack engineer,Ruby,Ruby on Rails,Javascript,React,Redux,PostgreSQL,Postgres"
  end

  def image
    "//s3.amazonaws.com/petejabbour-website/pete_jabbour.jpg"
  end
end
