module ApplicationHelper

  def social_meta_tags
    title = title = content_for?(:title) ? strip_tags(content_for(:title)).html_safe  : "Pete Jabbour | Rails Developer, Technology Consultant, and Full-Stack Engineer"
    title = title.strip
    description = "Chicago-based technology consultant, web developer, and web designer. UX/UI, HTML/CSS, Javascript, AngularJS, PostgreSQL, Ruby on Rails, Ruby, R, and Golang"
    image = "//s3.amazonaws.com/petejabbour-website/pete_jabbour.jpg"
    content_tag(:title, title) +
    content_tag(:meta, nil, content: title, property: 'og:title') +
    content_tag(:meta, nil, content: description, property: 'og:description') +
    content_tag(:meta, nil, content: request.original_url, property: 'og:url') +
    content_tag(:meta, nil, content: image, property: 'og:image') +
    content_tag(:meta, nil, content: title, name: 'title') +
    content_tag(:meta, nil, content: description, name: 'description') +
    content_tag(:link, nil, href: image, rel: 'image_src').html_safe +
    content_tag(:meta, nil, content: 'twitter summary', name: 'twitter:card') +
    content_tag(:meta, nil, content: title, name: 'twitter:title') +
    content_tag(:meta, nil, content: description, name: 'twitter:description') +
    content_tag(:meta, nil, content: image, name: 'twitter:image') +
    content_tag(:meta, nil, content: title, itemprop: 'name') +
    content_tag(:meta, nil, content: description, itemprop: 'description') +
    content_tag(:meta, nil, content: image, itemprop: 'image')
  end
end
