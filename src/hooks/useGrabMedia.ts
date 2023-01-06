import { useState, useMemo } from "react";
import Requests from "../services/Requests";

const useGrabMedia = (mediaID: number) => {
  const [media, setMedia] = useState(undefined);

  useMemo(() => {
    const getImage = async () => {
      try {
        const result = await Requests.getMedia(mediaID);

        // console.log(result.data);

        setMedia(result.data.media_details.sizes.medium_large.source_url);
      } catch (e: any) {
        console.log(e.code);
      }
    };

    getImage();
  }, []);

  return { media };
};

export default useGrabMedia;
