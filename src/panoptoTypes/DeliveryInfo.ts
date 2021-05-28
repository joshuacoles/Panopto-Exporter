export interface DeliveryInfo {
    AllowPublicNotes:           boolean;
    BroadcastRefreshInterval:   number;
    BroadcastSegmentBackoff:    number;
    CompletionPercentage:       number;
    Delivery:                   Delivery;
    DiscussionCacheSeconds:     number;
    DownloadUrl:                null;
    EmbedUrl:                   string;
    InvocationId:               string;
    LastViewingPosition:        number;
    PodcastCompleted:           boolean;
    SessionId:                  string;
    SessionRole:                number;
    UserCanCreateQuestionLists: boolean;
    UserEmail:                  string;
    UserId:                     string;
    UserKey:                    string;
    UserName:                   string;
    UserRating:                 null;
    ViewerFileId:               string;
}

export interface Delivery {
    AllowPublishNotes:            boolean;
    AvailableLanguages:           null[];
    AverageRating:                number;
    BroadcastEnded:               boolean;
    BroadcastInterrupted:         boolean;
    BroadcastType:                number;
    Contributors:                 Contributor[];
    DiscussionEnabled:            boolean;
    Duration:                     number;
    EventTargets:                 any[];
    FirstQuizOffset:              number;
    HasAnyLinks:                  boolean;
    HasCaptions:                  boolean;
    HasQuiz:                      boolean;
    HasSplices:                   boolean;
    Identifier:                   string;
    IsActiveBroadcast:            boolean;
    IsAudioPodcastEncodeComplete: boolean;
    IsBroadcast:                  boolean;
    IsOpen:                       boolean;
    IsPodcastEncodeComplete:      boolean;
    IsPrimaryAudioOnly:           boolean;
    IsPurgedEncode:               boolean;
    IsPurgedLegacyEncode:         boolean;
    IsReadyForEditing:            boolean;
    IsStarted:                    boolean;
    IsTabletEncodeComplete:       boolean;
    IsViewerEncodeComplete:       boolean;
    NextDeliveryDescription:      null;
    NextDeliveryDuration:         number;
    NextDeliveryId:               null;
    NextDeliveryIsLive:           boolean;
    NextDeliveryThumbUrl:         null;
    NextDeliveryTitle:            null;
    NextDeliveryUrl:              null;
    OwnerId:                      string;
    OwnerIsOverQuota:             boolean;
    Permissions:                  boolean[];
    PublicID:                     string;
    PublicNotesStreams:           any[];
    RatingCount:                  number;
    RehydrationAvailable:         boolean;
    RequiresAdvancedEditor:       boolean;
    SessionAbstract:              null;
    SessionFileId:                string;
    SessionGroupAbstract:         null;
    SessionGroupLongName:         string;
    SessionGroupPublicID:         string;
    SessionGroupShortName:        null;
    SessionName:                  string;
    SessionPublicID:              string;
    SessionStartTime:             number;
    Streams:                      Stream[];
    Timestamps:                   any[];
}

export interface Contributor {
    Bio:         null;
    DisplayName: string;
    UserKey:     string;
}

export interface Stream {
    AbsoluteEnd:             number;
    AbsoluteStart:           number;
    BroadcastType:           number;
    EditMediaFileType:       number;
    EditMediaFileTypeLegacy: null;
    EditMediaFileTypeName:   string;
    Interrupted:             boolean;
    Name:                    null;
    PublicID:                string;
    RelativeEnd:             number;
    RelativeSegments:        null;
    RelativeStart:           number;
    SourceMediaFileType:     number;
    StreamFileId:            string;
    StreamHttpUrl:           null;
    StreamType:              number;
    StreamTypeName:          string;
    StreamUrl:               string;
    Tag:                     string;
    VRType:                  number;
    ViewerMediaFileType:     number;
    ViewerMediaFileTypeName: string;
}
