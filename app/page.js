import Image from "next/image";
import styles from "./page.module.css";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

const Home = () => {
  return (
    <main>
      <Heading level={1}>Spotify</Heading>
      <Heading level={2}>Artist marginBottom{4} </Heading>
      <Heading level={3}>Songs</Heading>
      <Paragraph intro marginBottom={12}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        cursus condimentum ex. Vestibulum tristique leo in risus mollis
        scelerisque. Ut turpis ante, vulputate sed luctus ut, dictum eget nisi.
        Etiam placerat dignissim convallis. Nulla est mi, euismod nec tristique
        nec, viverra vel neque. Donec vel laoreet nisi. Donec cursus, purus ac
        semper eleifend, purus ipsum egestas ante, in semper nisi nisl id augue.
        Quisque ac porttitor mauris. Morbi vel feugiat nisi. Fusce volutpat ante
        ipsum, a placerat diam lobortis nec. Sed ac posuere orci. Praesent
        elementum massa ac commodo pretium. Morbi id dictum enim. Nam in erat
        augue.
      </Paragraph>
      <Paragraph marginBottom={1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        cursus condimentum ex. Vestibulum tristique leo in risus mollis
        scelerisque. Ut turpis ante, vulputate sed luctus ut, dictum eget nisi.
        Etiam placerat dignissim convallis. Nulla est mi, euismod nec tristique
        nec, viverra vel neque. Donec vel laoreet nisi. Donec cursus, purus ac
        semper eleifend, purus ipsum egestas ante, in semper nisi nisl id augue.
        Quisque ac porttitor mauris. Morbi vel feugiat nisi. Fusce volutpat ante
        ipsum, a placerat diam lobortis nec. Sed ac posuere orci. Praesent
        elementum massa ac commodo pretium. Morbi id dictum enim. Nam in erat
        augue.
      </Paragraph>
      <Paragraph marginBottom={5}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        cursus condimentum ex. Vestibulum tristique leo in risus mollis
        scelerisque. Ut turpis ante, vulputate sed luctus ut, dictum eget nisi.
        Etiam placerat dignissim convallis. Nulla est mi, euismod nec tristique
        nec, viverra vel neque. Donec vel laoreet nisi. Donec cursus, purus ac
        semper eleifend, purus ipsum egestas ante, in semper nisi nisl id augue.
        Quisque ac porttitor mauris. Morbi vel feugiat nisi. Fusce volutpat ante
        ipsum, a placerat diam lobortis nec. Sed ac posuere orci. Praesent
        elementum massa ac commodo pretium. Morbi id dictum enim. Nam in erat
        augue.
      </Paragraph>
      <Paragraph caption>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        cursus condimentum ex. Vestibulum tristique leo in risus mollis
        scelerisque. Ut turpis ante, vulputate sed luctus ut, dictum eget nisi.
        Etiam placerat dignissim convallis. Nulla est mi, euismod nec tristique
        nec, viverra vel neque. Donec vel laoreet nisi. Donec cursus, purus ac
        semper eleifend, purus ipsum egestas ante, in semper nisi nisl id augue.
        Quisque ac porttitor mauris. Morbi vel feugiat nisi. Fusce volutpat ante
        ipsum, a placerat diam lobortis nec. Sed ac posuere orci. Praesent
        elementum massa ac commodo pretium. Morbi id dictum enim. Nam in erat
        augue.
      </Paragraph>
    </main>
  );
};
export default Home;
