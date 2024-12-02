import Error from "../../components/Error/Error.jsx";

const NotFound = () => {
  document.title = "Portfolio Sannier Yoan - Page introuvable";
  return (
    <>
      <main>
        <Error />
      </main>
    </>
  );
};

export default NotFound;
