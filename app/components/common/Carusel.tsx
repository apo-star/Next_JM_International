import { Image, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextWithLine from "../TextDecoration/textDecoration";
import { mountAction } from "@/app/store/store";
import "./style.css";
import { useTranslation } from "@/app/hooks/useTranslation";
import { brandImages } from "@/app/utils/assetIndex";

const Carusel = ({ sections }: any) => {
  const { language } = useSelector((state: any) => state.mount);
  const dispatch = useDispatch();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentSectionIndex + 1) % sections.length;
      setCurrentSectionIndex(nextIndex);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentSectionIndex, sections.length]);

  const currentSection = sections[currentSectionIndex];

  const handleNext = () => {
    setCurrentSectionIndex((currentSectionIndex + 1) % sections.length);
  };

  const handlePrev = () => {
    setCurrentSectionIndex(
      (currentSectionIndex - 1 + sections.length) % sections.length
    );
  };

  const handleIndicatorPress = (index: number) => {
    setCurrentSectionIndex(index);
  };

  return (
    <div className="carousel-container">
      <VStack marginBottom={10}>
        <TextWithLine
          text={
            language && language === "en"
              ? currentSection.section
              : currentSection.sectionES
          }
        />
        <Image
          className="section-brand"
          src={brandImages[currentSection.brandImageId].logo}
          alt={currentSection.title}
        />
      </VStack>

      <div className="carousel">
        {/* <IconButton
            isRound={true}
            variant="solid"
            aria-label="Done"
            fontSize="20px"
            icon={<ChevronLeftIcon />}
            onClick={handlePrev}
            style={{ marginRight: 10 }}
          /> */}
        {currentSection.products.map((product: any) => (
          <Link
            key={product.id}
            href={{
              pathname: "/products",
            }}
            onClick={() =>
              dispatch(
                mountAction.updateProduct({
                  products: product.name,
                  index: product.title,
                })
              )
            }
            className="carousel-item"
          >
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Image
                className="carousel-img"
                src={product.images[0]}
                alt={product.title}
              />
            </div>

            <h3>{product.title}</h3>
            <p className="description">
              {language && language === "en"
                ? product.description
                : product.descriptionES}
            </p>
          </Link>
        ))}
        {/* <IconButton
            isRound={true}
            variant="solid"
            aria-label="Done"
            fontSize="20px"
            icon={<ChevronRightIcon />}
            onClick={handleNext}
          /> */}
      </div>
      <div
        className="dots"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: 10,
            width: "30%",
            marginTop: 25,
          }}
        >
          {sections.map((_: any, index: any) => {
            return (
              <button
                style={{
                  width: 20,
                }}
                key={index}
                onClick={() => handleIndicatorPress(index)}
              >
                <div
                  style={{
                    backgroundColor:
                      index === currentSectionIndex ? "red" : "#C9C6C6",
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    margin: 10,
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carusel;
