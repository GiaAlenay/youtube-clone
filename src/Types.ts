export interface InitialState {
    videos: HomePageVideos[]; //array de objetos HomePageVideos
    currentPlaying: CurrentPlaying | null; //objeto currentPlaying  o nulo
    searchTerm: string; 
    searchResults: []; //array
    nextPageToken: string | null;
    recommendedVideos: RecommendedVideos[]; //array de objetos  RecommendedVideos
  }
  
  export interface HomePageVideos {
    videoId: string;
    videoTitle: string;
    videoDescription: string;
    videoLink: string;
  
    videoThumbnail: string;
    videoDuration: string;
    videoViews: string;
    videoAge: string;
    channelInfo: {
      id: string;
      image: string;
      name: string;
    };
  }
  
  export interface CurrentPlaying {
    videoId: string;
    videoTitle: string;
    videoDescription: string;
    videoViews: string;
    videoLikes: string;
    videoAge: string;
    channelInfo: {
      id: string;
      image: string;
      name: string;
      subscribers: string;
    };
  }
  
  export interface RecommendedVideos {
    videoId: string;
    videoTitle: string;
    videoThumbnail: string;
    videoDuration: string;
    videoViews: string;
    videoAge: string;
    channelInfo: {
      id: string;
      name: string;
    };
  }
  
  export interface Item {
    snippet: {
      title: string;
      thumbnails: { medium: { url: string } };
      publishedAt: Date;
      channelTitle: string;
      channelId: string;
    };
    contentDetails: { upload: { videoId: string } };
  }