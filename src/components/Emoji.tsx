import hundred from "../assets/100.webp";
import thumbsup from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "pass", boxSize: "25px" },
    4: { src: thumbsup, alt: "recommened", boxSize: "25px" },
    5: { src: hundred, alt: "God-Tier", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
