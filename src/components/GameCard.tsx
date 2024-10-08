import { Card, CardBody, Image, Heading, Text, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getImageCroppedUrl from "../services/images-crop";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card >
      <Image src={getImageCroppedUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading fontSize="20px">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
