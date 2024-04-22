const FooterPage = () => {
  return (
    <footer className="bg-white w-[100%] rounded-lg drop-shadow-lg shadow m-4 dark:bg-gray-800 max-w-[1100px]">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          Data provided by Marvel. © 2014 Marvel
        </span>
      </div>
    </footer>
  );
};

export default FooterPage;
