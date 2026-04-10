import React from 'react'

export default function Home() {
  return (
   <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="" />
  <meta
    name="author"
    content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
  />
  <meta name="generator" content="Hugo 0.84.0" />
  <title>Cover Template · Bootstrap v5.0</title>
  <link
    rel="canonical"
    href="https://getbootstrap.com/docs/5.0/examples/cover/"
  />
  {/* Bootstrap core CSS */}
  <link
   
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />
  {/* Favicons */}
  <link
    rel="apple-touch-icon"
    href="/docs/5.0/assets/img/favicons/apple-touch-icon.png"
    sizes="180x180"
  />
  <link
    rel="icon"
    href="/docs/5.0/assets/img/favicons/favicon-32x32.png"
    sizes="32x32"
    type="image/png"
  />
  <link
    rel="icon"
    href="/docs/5.0/assets/img/favicons/favicon-16x16.png"
    sizes="16x16"
    type="image/png"
  />
  <link rel="manifest" href="/docs/5.0/assets/img/favicons/manifest.json" />
  <link
    rel="mask-icon"
    href="/docs/5.0/assets/img/favicons/safari-pinned-tab.svg"
    color="#7952b3"
  />
  <link rel="icon" href="/docs/5.0/assets/img/favicons/favicon.ico" />
  <meta name="theme-color" content="#7952b3" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n    "
    }}
  />
  {/* Custom styles for this template */}
  <link href="cover.css" rel="stylesheet" />
  <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header className="mb-auto">
      <div>
       
        
      </div>
    </header>
    <main className="px-3">
      <h1>Home Page</h1>
      <p className="lead">
       Welcome to Our Company
Since our founding in [2025], we have been dedicated to providing high-quality services to our community. Our team of experts works tirelessly to ensure that every client receives the personalized attention and innovative solutions they deserve. We believe in transparency, integrity, and excellence in everything we do.
      </p>
      <p className="lead">
        <a
          href="#"
          className="btn btn-lg btn-secondary fw-bold border-white bg-white"
        >
          Learn more
        </a>
      </p>
    </main>
    <footer className="mt-auto text-white-50">
      <p>
        Cover template for{" "}
        <a href="https://getbootstrap.com/" className="text-white">
          Bootstrap
        </a>
        , by{" "}
        <a href="https://twitter.com/mdo" className="text-white">
          @mdo
        </a>
        .
      </p>
    </footer>
  </div>
</>

   
   
   
  )
}
