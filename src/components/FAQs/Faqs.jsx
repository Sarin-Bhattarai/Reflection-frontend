import React from "react";
import Faq from "react-faq-component";
import "../../utils/css/faq.css";

const Faqs = () => {
  const data = {
    rows: [
      {
        title: "What cleaning services do you provide?",
        content: `We offer a wide range of cleaning services, including regular cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleaning, and specialized cleaning for businesses and industries.`,
      },

      {
        title: "Do you provide cleaning supplies and equipment?",
        content: `Yes, we provide all the necessary cleaning supplies and equipment to perform the cleaning services. However, if you have any specific cleaning products that you would like us to use, please let us know.`,
      },

      {
        title: "Do you have insurance coverage?",
        content: `Yes, we are fully insured and bonded, which means that you are protected in case of any accidents or damages that may occur during the cleaning service.`,
      },
      {
        title: "Can I customize my cleaning service?",
        content: `Yes, we offer customizable cleaning solutions that are tailored to meet your unique needs. You can let us know what areas you would like us to focus on or any specific cleaning requests you have.`,
      },
      {
        title: "How do you ensure the quality of your cleaning services?",
        content: `We have a team of experienced and trained professionals who use top-of-the-line equipment and cleaning products to deliver exceptional cleaning results. We also follow strict quality control procedures to ensure that every cleaning service meets our high standards.`,
      },
    ],
  };

  const styles = {
    titleTextColor: "black",
    rowTitleColor: "black",
    bgColor: "#fff",
    rowContentColor: "black",
    arrowColor: "black",
    transitionDuration: "0.8s",
  };

  const config = {
    animate: true,
    arrowIcon: "V",
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
  };
  return (
    <section className="faq">
      <div className="container topMargin">
        <div className="heading">
          <h3>FAQs Section</h3>
          <h1>Frequently Asked Questions</h1>
        </div>
        <Faq data={data} styles={styles} config={config} />
      </div>
    </section>
  );
};

export default Faqs;
