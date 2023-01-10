import { useState, useMemo, useEffect } from "react";
import Requests from "../services/Requests";

const useGrabMedia = (mediaID: number) => {
  const [media, setMedia] = useState(undefined);

  useEffect(() => {
    const getImage = async () => {
      const result = await Requests.getMedia(mediaID);
      // console.log(result.data);
      setMedia(result.data.media_details.sizes.medium_large.source_url);

      return "";
    };

    getImage();
  }, []);

  return { media };
};

export default useGrabMedia;
