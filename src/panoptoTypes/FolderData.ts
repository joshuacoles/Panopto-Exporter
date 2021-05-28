export interface FolderData {
    d: DataWrapper;
}

export interface DataWrapper {
    __type:                  string;

    Results:                 Result[];
    TotalNumber:             number;

    BookmarkedSessionCount:  null;
    CanAddSubfolder:         boolean;
    FolderType:              number;
    InProgressSessionCount:  null;
    ParentFolderId:          string;
    ScheduledRecordingCount: null;
    Subfolders:              any[];
}

export interface Result {
    __type:                        string;

    Abstract:                      null;
    AffiliationName:               null;
    AnalyticsCompletionPercentage: number | null;
    AvailabilityMessage:           string;
    AvailabilityWindowEnd:         null;
    AvailabilityWindowStart:       null;
    AverageRating:                 number;
    Bookmarks:                     any[];
    Context:                       any[];
    ContextsHaveTime:              boolean;
    DatabaseSessionStatus:         number;
    DeletedByUsername:             null;
    DeletedTime:                   string;
    DeliveryID:                    string;
    DeliveryName:                  string;
    Duration:                      number;
    FolderID:                      string;
    FolderName:                    string;
    HasCaptions:                   boolean;
    HasStreams:                    boolean;
    HasWriteAccess:                boolean;
    IosVideoUrl:                   string;
    IsBroadcast:                   boolean;
    IsCreator:                     boolean;
    IsDownloadAvailable:           null;
    IsEditable:                    boolean;
    IsPermanentlyDeletable:        boolean;
    IsRestorable:                  boolean;
    MostRecentViewPosition:        number;
    MostRecentViewing:             null | string;
    NotesUrl:                      string;
    PendingPermanentDeletionTime:  null;
    Permissions:                   boolean[];
    PlayableObjectType:            number;
    PodcastDetails:                number;
    PresenterFirstNames:           any[];
    PresenterLastNames:            any[];
    PresenterUserNames:            any[];
    Progress:                      number;
    RemoteRecorderID:              null;
    RemoteRecorderName:            null;
    RetentionActionType:           null;
    RetentionApprovalUserId:       null;
    RetentionApprovalUserName:     null;
    RetentionLength:               null;
    RetentionMetricType:           null;
    RetentionPeriod:               null;
    RetentionRuleGroupName:        null;
    RetentionRuleViolationDate:    null;
    SessionGroupRequiresApproval:  boolean;
    SessionID:                     string;
    SessionName:                   string;
    SharedWithMeDate:              null;
    ShowSettings:                  boolean;
    StartTime:                     string;
    Status:                        number;
    TabletVideoUrl:                string;
    ThumbUrl:                      string;
    UserCanEnumerateFolder:        boolean;
    ViewerUrl:                     string;
    EditorUrl:                     string;
    OrderSort:                     number;
}
