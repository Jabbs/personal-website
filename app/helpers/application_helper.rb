module ApplicationHelper
  def add_title_tags
    content_tag(:title, metatitle)
  end

  def add_meta_tags
    content_tag(:meta, nil, 'http-equiv' => 'Content-Type', content: 'text/html; charset=utf-8') +
    content_tag(:meta, nil, name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no') +
    content_tag(:meta, nil, name: 'keywords', content: metakeywords) +
    content_tag(:meta, nil, property: 'og:site_name', content: 'Jabbs.co') +
    content_tag(:meta, nil, property: 'og:title', content: metatitle) +
    content_tag(:meta, nil, property: 'og:description', content: metadescription) +
    content_tag(:meta, nil, property: 'og:url', content: request.original_url) +
    content_tag(:meta, nil, property: 'og:image', content: metaimage) +
    content_tag(:meta, nil, property: 'og:type', content: 'website') +
    content_tag(:meta, nil, name: 'twitter:site', content: '@petejabbour') +
    content_tag(:meta, nil, name: 'twitter:card', content: 'summary_large_image') +
    content_tag(:meta, nil, name: 'twitter:title', content: metatitle) +
    content_tag(:meta, nil, name: 'twitter:description', content: metadescription) +
    content_tag(:meta, nil, name: 'twitter:image', content: metaimage) +
    content_tag(:meta, nil, itemprop: 'name', content: metatitle) +
    content_tag(:meta, nil, itemprop: 'description', content: metadescription) +
    content_tag(:meta, nil, itemprop: 'image', content: metaimage) +
    content_tag(:meta, nil, name: 'title', content: metatitle) +
    content_tag(:meta, nil, name: 'description', content: metadescription) +
    content_tag(:meta, nil, name: 'robots', content: 'index,follow')
  end

  def add_link_tags
    content_tag(:link, nil, href: metaimage, rel: 'image_src').html_safe
  end

  private

  def metatitle
    title = content_for?(:title) ? strip_tags(content_for(:title)).html_safe  : "Pete Jabbour | Full-Stack Engineer"
    title.strip
  end

  def metadescription
    "Chicago full-stack engineer and web developer for hire. I build modern web applications with Ruby, Ruby on Rails, Javascript, React, and PostgreSQL"
  end

  def metakeywords
    "Chicago,Web Developer,Software Engineer,Full-stack engineer,Ruby,Ruby on Rails,Javascript,React,Redux,PostgreSQL,Postgres"
  end

  def metaimage
    "//s3.amazonaws.com/petejabbour-website/pete_jabbour.jpg"
  end
end
