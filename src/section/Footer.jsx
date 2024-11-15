import React from 'react'

function Footer() {
  return (

    <footer className=" bottom-0 flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white">
      <div className="container pt-9">
        {/* Facebook Icon */}
        <div className=" flex justify-center">
          <a
            itemProp="url"
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61568376730830"
            type="button"
            className="flex rounded-full bg-transparent p-3 font-medium leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-500 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
            data-twe-ripple-init>
            <span className="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512">
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
        
            </span>
           Follow us
          </a>
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-center p-2 text-sm text-surface dark:text-neutral-200">
        <p>
          Address: P-1 B-26 L-36 Southville 3 Brgy Poblacion, Muntinlupa City,
          Philippines
        </p>
        <p>Email: gandolijhonadrian3@gmail.com</p>
        <p>Contact: 0916 126 6717</p>
      </div>
    </footer>
  );
}

export default Footer
