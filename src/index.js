/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.7
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccessTokenDetails', 'model/Album', 'model/Allotment', 'model/Artist', 'model/Audio', 'model/AudioAssetDetails', 'model/AudioAssets', 'model/AudioDataList', 'model/AudioSearchResults', 'model/Category', 'model/CategoryDataList', 'model/Collection', 'model/CollectionCreateRequest', 'model/CollectionCreateResponse', 'model/CollectionDataList', 'model/CollectionItem', 'model/CollectionItemDataList', 'model/CollectionItemRequest', 'model/CollectionUpdateRequest', 'model/Contributor', 'model/ContributorProfile', 'model/ContributorProfileDataList', 'model/ContributorProfileSocialMedia', 'model/Cookie', 'model/DownloadHistory', 'model/DownloadHistoryDataList', 'model/DownloadHistoryFormatDetails', 'model/DownloadHistoryMediaDetails', 'model/DownloadHistoryUserDetails', 'model/EditorialAssets', 'model/EditorialCategory', 'model/EditorialContent', 'model/EditorialContentDataList', 'model/EditorialCoverItem', 'model/EditorialLivefeed', 'model/EditorialLivefeedList', 'model/EditorialSearchResults', 'model/Error', 'model/FeaturedCollection', 'model/FeaturedCollectionCoverItem', 'model/FeaturedCollectionDataList', 'model/Image', 'model/ImageAssets', 'model/ImageCreateRequest', 'model/ImageCreateResponse', 'model/ImageDataList', 'model/ImageSearchResults', 'model/ImageSizeDetails', 'model/LicenseAudio', 'model/LicenseAudioRequest', 'model/LicenseAudioResult', 'model/LicenseAudioResultDataList', 'model/LicenseEditorialContent', 'model/LicenseEditorialContentRequest', 'model/LicenseEditorialContentResult', 'model/LicenseEditorialContentResultDataList', 'model/LicenseFormat', 'model/LicenseImage', 'model/LicenseImageRequest', 'model/LicenseImageResult', 'model/LicenseImageResultDataList', 'model/LicenseRequestMetadata', 'model/LicenseVideo', 'model/LicenseVideoRequest', 'model/LicenseVideoResult', 'model/LicenseVideoResultDataList', 'model/Model', 'model/ModelRelease', 'model/Price', 'model/Recommendation', 'model/RecommendationDataList', 'model/RedownloadImage', 'model/RedownloadVideo', 'model/Subscription', 'model/SubscriptionDataList', 'model/SubscriptionMetadata', 'model/TestEcho', 'model/TestValidate', 'model/TestValidateHeader', 'model/TestValidateQuery', 'model/Thumbnail', 'model/UpdatedMedia', 'model/UpdatedMediaDataList', 'model/Url', 'model/Urls', 'model/UserDetails', 'model/UserPostRequest', 'model/UserPostResponse', 'model/Video', 'model/VideoAssets', 'model/VideoDataList', 'model/VideoSearchResults', 'model/VideoSizeDetails', 'api/AudioApi', 'api/ContributorsApi', 'api/EditorialApi', 'api/ImagesApi', 'api/TestApi', 'api/UsersApi', 'api/VideosApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AccessTokenDetails'), require('./model/Album'), require('./model/Allotment'), require('./model/Artist'), require('./model/Audio'), require('./model/AudioAssetDetails'), require('./model/AudioAssets'), require('./model/AudioDataList'), require('./model/AudioSearchResults'), require('./model/Category'), require('./model/CategoryDataList'), require('./model/Collection'), require('./model/CollectionCreateRequest'), require('./model/CollectionCreateResponse'), require('./model/CollectionDataList'), require('./model/CollectionItem'), require('./model/CollectionItemDataList'), require('./model/CollectionItemRequest'), require('./model/CollectionUpdateRequest'), require('./model/Contributor'), require('./model/ContributorProfile'), require('./model/ContributorProfileDataList'), require('./model/ContributorProfileSocialMedia'), require('./model/Cookie'), require('./model/DownloadHistory'), require('./model/DownloadHistoryDataList'), require('./model/DownloadHistoryFormatDetails'), require('./model/DownloadHistoryMediaDetails'), require('./model/DownloadHistoryUserDetails'), require('./model/EditorialAssets'), require('./model/EditorialCategory'), require('./model/EditorialContent'), require('./model/EditorialContentDataList'), require('./model/EditorialCoverItem'), require('./model/EditorialLivefeed'), require('./model/EditorialLivefeedList'), require('./model/EditorialSearchResults'), require('./model/Error'), require('./model/FeaturedCollection'), require('./model/FeaturedCollectionCoverItem'), require('./model/FeaturedCollectionDataList'), require('./model/Image'), require('./model/ImageAssets'), require('./model/ImageCreateRequest'), require('./model/ImageCreateResponse'), require('./model/ImageDataList'), require('./model/ImageSearchResults'), require('./model/ImageSizeDetails'), require('./model/LicenseAudio'), require('./model/LicenseAudioRequest'), require('./model/LicenseAudioResult'), require('./model/LicenseAudioResultDataList'), require('./model/LicenseEditorialContent'), require('./model/LicenseEditorialContentRequest'), require('./model/LicenseEditorialContentResult'), require('./model/LicenseEditorialContentResultDataList'), require('./model/LicenseFormat'), require('./model/LicenseImage'), require('./model/LicenseImageRequest'), require('./model/LicenseImageResult'), require('./model/LicenseImageResultDataList'), require('./model/LicenseRequestMetadata'), require('./model/LicenseVideo'), require('./model/LicenseVideoRequest'), require('./model/LicenseVideoResult'), require('./model/LicenseVideoResultDataList'), require('./model/Model'), require('./model/ModelRelease'), require('./model/Price'), require('./model/Recommendation'), require('./model/RecommendationDataList'), require('./model/RedownloadImage'), require('./model/RedownloadVideo'), require('./model/Subscription'), require('./model/SubscriptionDataList'), require('./model/SubscriptionMetadata'), require('./model/TestEcho'), require('./model/TestValidate'), require('./model/TestValidateHeader'), require('./model/TestValidateQuery'), require('./model/Thumbnail'), require('./model/UpdatedMedia'), require('./model/UpdatedMediaDataList'), require('./model/Url'), require('./model/Urls'), require('./model/UserDetails'), require('./model/UserPostRequest'), require('./model/UserPostResponse'), require('./model/Video'), require('./model/VideoAssets'), require('./model/VideoDataList'), require('./model/VideoSearchResults'), require('./model/VideoSizeDetails'), require('./api/AudioApi'), require('./api/ContributorsApi'), require('./api/EditorialApi'), require('./api/ImagesApi'), require('./api/TestApi'), require('./api/UsersApi'), require('./api/VideosApi'));
  }
}(function(ApiClient, AccessTokenDetails, Album, Allotment, Artist, Audio, AudioAssetDetails, AudioAssets, AudioDataList, AudioSearchResults, Category, CategoryDataList, Collection, CollectionCreateRequest, CollectionCreateResponse, CollectionDataList, CollectionItem, CollectionItemDataList, CollectionItemRequest, CollectionUpdateRequest, Contributor, ContributorProfile, ContributorProfileDataList, ContributorProfileSocialMedia, Cookie, DownloadHistory, DownloadHistoryDataList, DownloadHistoryFormatDetails, DownloadHistoryMediaDetails, DownloadHistoryUserDetails, EditorialAssets, EditorialCategory, EditorialContent, EditorialContentDataList, EditorialCoverItem, EditorialLivefeed, EditorialLivefeedList, EditorialSearchResults, Error, FeaturedCollection, FeaturedCollectionCoverItem, FeaturedCollectionDataList, Image, ImageAssets, ImageCreateRequest, ImageCreateResponse, ImageDataList, ImageSearchResults, ImageSizeDetails, LicenseAudio, LicenseAudioRequest, LicenseAudioResult, LicenseAudioResultDataList, LicenseEditorialContent, LicenseEditorialContentRequest, LicenseEditorialContentResult, LicenseEditorialContentResultDataList, LicenseFormat, LicenseImage, LicenseImageRequest, LicenseImageResult, LicenseImageResultDataList, LicenseRequestMetadata, LicenseVideo, LicenseVideoRequest, LicenseVideoResult, LicenseVideoResultDataList, Model, ModelRelease, Price, Recommendation, RecommendationDataList, RedownloadImage, RedownloadVideo, Subscription, SubscriptionDataList, SubscriptionMetadata, TestEcho, TestValidate, TestValidateHeader, TestValidateQuery, Thumbnail, UpdatedMedia, UpdatedMediaDataList, Url, Urls, UserDetails, UserPostRequest, UserPostResponse, Video, VideoAssets, VideoDataList, VideoSearchResults, VideoSizeDetails, AudioApi, ContributorsApi, EditorialApi, ImagesApi, TestApi, UsersApi, VideosApi) {
  'use strict';

  /**
   * The_Shutterstock_API_provides_access_to_Shutterstocks_library_of_media_as_well_as_information_about_customers_accounts_and_the_contributors_that_provide_the_media_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ShutterstockApiReference = require('index'); // See note below*.
   * var xxxSvc = new ShutterstockApiReference.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ShutterstockApiReference.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ShutterstockApiReference.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ShutterstockApiReference.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.7
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AccessTokenDetails model constructor.
     * @property {module:model/AccessTokenDetails}
     */
    AccessTokenDetails: AccessTokenDetails,
    /**
     * The Album model constructor.
     * @property {module:model/Album}
     */
    Album: Album,
    /**
     * The Allotment model constructor.
     * @property {module:model/Allotment}
     */
    Allotment: Allotment,
    /**
     * The Artist model constructor.
     * @property {module:model/Artist}
     */
    Artist: Artist,
    /**
     * The Audio model constructor.
     * @property {module:model/Audio}
     */
    Audio: Audio,
    /**
     * The AudioAssetDetails model constructor.
     * @property {module:model/AudioAssetDetails}
     */
    AudioAssetDetails: AudioAssetDetails,
    /**
     * The AudioAssets model constructor.
     * @property {module:model/AudioAssets}
     */
    AudioAssets: AudioAssets,
    /**
     * The AudioDataList model constructor.
     * @property {module:model/AudioDataList}
     */
    AudioDataList: AudioDataList,
    /**
     * The AudioSearchResults model constructor.
     * @property {module:model/AudioSearchResults}
     */
    AudioSearchResults: AudioSearchResults,
    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category: Category,
    /**
     * The CategoryDataList model constructor.
     * @property {module:model/CategoryDataList}
     */
    CategoryDataList: CategoryDataList,
    /**
     * The Collection model constructor.
     * @property {module:model/Collection}
     */
    Collection: Collection,
    /**
     * The CollectionCreateRequest model constructor.
     * @property {module:model/CollectionCreateRequest}
     */
    CollectionCreateRequest: CollectionCreateRequest,
    /**
     * The CollectionCreateResponse model constructor.
     * @property {module:model/CollectionCreateResponse}
     */
    CollectionCreateResponse: CollectionCreateResponse,
    /**
     * The CollectionDataList model constructor.
     * @property {module:model/CollectionDataList}
     */
    CollectionDataList: CollectionDataList,
    /**
     * The CollectionItem model constructor.
     * @property {module:model/CollectionItem}
     */
    CollectionItem: CollectionItem,
    /**
     * The CollectionItemDataList model constructor.
     * @property {module:model/CollectionItemDataList}
     */
    CollectionItemDataList: CollectionItemDataList,
    /**
     * The CollectionItemRequest model constructor.
     * @property {module:model/CollectionItemRequest}
     */
    CollectionItemRequest: CollectionItemRequest,
    /**
     * The CollectionUpdateRequest model constructor.
     * @property {module:model/CollectionUpdateRequest}
     */
    CollectionUpdateRequest: CollectionUpdateRequest,
    /**
     * The Contributor model constructor.
     * @property {module:model/Contributor}
     */
    Contributor: Contributor,
    /**
     * The ContributorProfile model constructor.
     * @property {module:model/ContributorProfile}
     */
    ContributorProfile: ContributorProfile,
    /**
     * The ContributorProfileDataList model constructor.
     * @property {module:model/ContributorProfileDataList}
     */
    ContributorProfileDataList: ContributorProfileDataList,
    /**
     * The ContributorProfileSocialMedia model constructor.
     * @property {module:model/ContributorProfileSocialMedia}
     */
    ContributorProfileSocialMedia: ContributorProfileSocialMedia,
    /**
     * The Cookie model constructor.
     * @property {module:model/Cookie}
     */
    Cookie: Cookie,
    /**
     * The DownloadHistory model constructor.
     * @property {module:model/DownloadHistory}
     */
    DownloadHistory: DownloadHistory,
    /**
     * The DownloadHistoryDataList model constructor.
     * @property {module:model/DownloadHistoryDataList}
     */
    DownloadHistoryDataList: DownloadHistoryDataList,
    /**
     * The DownloadHistoryFormatDetails model constructor.
     * @property {module:model/DownloadHistoryFormatDetails}
     */
    DownloadHistoryFormatDetails: DownloadHistoryFormatDetails,
    /**
     * The DownloadHistoryMediaDetails model constructor.
     * @property {module:model/DownloadHistoryMediaDetails}
     */
    DownloadHistoryMediaDetails: DownloadHistoryMediaDetails,
    /**
     * The DownloadHistoryUserDetails model constructor.
     * @property {module:model/DownloadHistoryUserDetails}
     */
    DownloadHistoryUserDetails: DownloadHistoryUserDetails,
    /**
     * The EditorialAssets model constructor.
     * @property {module:model/EditorialAssets}
     */
    EditorialAssets: EditorialAssets,
    /**
     * The EditorialCategory model constructor.
     * @property {module:model/EditorialCategory}
     */
    EditorialCategory: EditorialCategory,
    /**
     * The EditorialContent model constructor.
     * @property {module:model/EditorialContent}
     */
    EditorialContent: EditorialContent,
    /**
     * The EditorialContentDataList model constructor.
     * @property {module:model/EditorialContentDataList}
     */
    EditorialContentDataList: EditorialContentDataList,
    /**
     * The EditorialCoverItem model constructor.
     * @property {module:model/EditorialCoverItem}
     */
    EditorialCoverItem: EditorialCoverItem,
    /**
     * The EditorialLivefeed model constructor.
     * @property {module:model/EditorialLivefeed}
     */
    EditorialLivefeed: EditorialLivefeed,
    /**
     * The EditorialLivefeedList model constructor.
     * @property {module:model/EditorialLivefeedList}
     */
    EditorialLivefeedList: EditorialLivefeedList,
    /**
     * The EditorialSearchResults model constructor.
     * @property {module:model/EditorialSearchResults}
     */
    EditorialSearchResults: EditorialSearchResults,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The FeaturedCollection model constructor.
     * @property {module:model/FeaturedCollection}
     */
    FeaturedCollection: FeaturedCollection,
    /**
     * The FeaturedCollectionCoverItem model constructor.
     * @property {module:model/FeaturedCollectionCoverItem}
     */
    FeaturedCollectionCoverItem: FeaturedCollectionCoverItem,
    /**
     * The FeaturedCollectionDataList model constructor.
     * @property {module:model/FeaturedCollectionDataList}
     */
    FeaturedCollectionDataList: FeaturedCollectionDataList,
    /**
     * The Image model constructor.
     * @property {module:model/Image}
     */
    Image: Image,
    /**
     * The ImageAssets model constructor.
     * @property {module:model/ImageAssets}
     */
    ImageAssets: ImageAssets,
    /**
     * The ImageCreateRequest model constructor.
     * @property {module:model/ImageCreateRequest}
     */
    ImageCreateRequest: ImageCreateRequest,
    /**
     * The ImageCreateResponse model constructor.
     * @property {module:model/ImageCreateResponse}
     */
    ImageCreateResponse: ImageCreateResponse,
    /**
     * The ImageDataList model constructor.
     * @property {module:model/ImageDataList}
     */
    ImageDataList: ImageDataList,
    /**
     * The ImageSearchResults model constructor.
     * @property {module:model/ImageSearchResults}
     */
    ImageSearchResults: ImageSearchResults,
    /**
     * The ImageSizeDetails model constructor.
     * @property {module:model/ImageSizeDetails}
     */
    ImageSizeDetails: ImageSizeDetails,
    /**
     * The LicenseAudio model constructor.
     * @property {module:model/LicenseAudio}
     */
    LicenseAudio: LicenseAudio,
    /**
     * The LicenseAudioRequest model constructor.
     * @property {module:model/LicenseAudioRequest}
     */
    LicenseAudioRequest: LicenseAudioRequest,
    /**
     * The LicenseAudioResult model constructor.
     * @property {module:model/LicenseAudioResult}
     */
    LicenseAudioResult: LicenseAudioResult,
    /**
     * The LicenseAudioResultDataList model constructor.
     * @property {module:model/LicenseAudioResultDataList}
     */
    LicenseAudioResultDataList: LicenseAudioResultDataList,
    /**
     * The LicenseEditorialContent model constructor.
     * @property {module:model/LicenseEditorialContent}
     */
    LicenseEditorialContent: LicenseEditorialContent,
    /**
     * The LicenseEditorialContentRequest model constructor.
     * @property {module:model/LicenseEditorialContentRequest}
     */
    LicenseEditorialContentRequest: LicenseEditorialContentRequest,
    /**
     * The LicenseEditorialContentResult model constructor.
     * @property {module:model/LicenseEditorialContentResult}
     */
    LicenseEditorialContentResult: LicenseEditorialContentResult,
    /**
     * The LicenseEditorialContentResultDataList model constructor.
     * @property {module:model/LicenseEditorialContentResultDataList}
     */
    LicenseEditorialContentResultDataList: LicenseEditorialContentResultDataList,
    /**
     * The LicenseFormat model constructor.
     * @property {module:model/LicenseFormat}
     */
    LicenseFormat: LicenseFormat,
    /**
     * The LicenseImage model constructor.
     * @property {module:model/LicenseImage}
     */
    LicenseImage: LicenseImage,
    /**
     * The LicenseImageRequest model constructor.
     * @property {module:model/LicenseImageRequest}
     */
    LicenseImageRequest: LicenseImageRequest,
    /**
     * The LicenseImageResult model constructor.
     * @property {module:model/LicenseImageResult}
     */
    LicenseImageResult: LicenseImageResult,
    /**
     * The LicenseImageResultDataList model constructor.
     * @property {module:model/LicenseImageResultDataList}
     */
    LicenseImageResultDataList: LicenseImageResultDataList,
    /**
     * The LicenseRequestMetadata model constructor.
     * @property {module:model/LicenseRequestMetadata}
     */
    LicenseRequestMetadata: LicenseRequestMetadata,
    /**
     * The LicenseVideo model constructor.
     * @property {module:model/LicenseVideo}
     */
    LicenseVideo: LicenseVideo,
    /**
     * The LicenseVideoRequest model constructor.
     * @property {module:model/LicenseVideoRequest}
     */
    LicenseVideoRequest: LicenseVideoRequest,
    /**
     * The LicenseVideoResult model constructor.
     * @property {module:model/LicenseVideoResult}
     */
    LicenseVideoResult: LicenseVideoResult,
    /**
     * The LicenseVideoResultDataList model constructor.
     * @property {module:model/LicenseVideoResultDataList}
     */
    LicenseVideoResultDataList: LicenseVideoResultDataList,
    /**
     * The Model model constructor.
     * @property {module:model/Model}
     */
    Model: Model,
    /**
     * The ModelRelease model constructor.
     * @property {module:model/ModelRelease}
     */
    ModelRelease: ModelRelease,
    /**
     * The Price model constructor.
     * @property {module:model/Price}
     */
    Price: Price,
    /**
     * The Recommendation model constructor.
     * @property {module:model/Recommendation}
     */
    Recommendation: Recommendation,
    /**
     * The RecommendationDataList model constructor.
     * @property {module:model/RecommendationDataList}
     */
    RecommendationDataList: RecommendationDataList,
    /**
     * The RedownloadImage model constructor.
     * @property {module:model/RedownloadImage}
     */
    RedownloadImage: RedownloadImage,
    /**
     * The RedownloadVideo model constructor.
     * @property {module:model/RedownloadVideo}
     */
    RedownloadVideo: RedownloadVideo,
    /**
     * The Subscription model constructor.
     * @property {module:model/Subscription}
     */
    Subscription: Subscription,
    /**
     * The SubscriptionDataList model constructor.
     * @property {module:model/SubscriptionDataList}
     */
    SubscriptionDataList: SubscriptionDataList,
    /**
     * The SubscriptionMetadata model constructor.
     * @property {module:model/SubscriptionMetadata}
     */
    SubscriptionMetadata: SubscriptionMetadata,
    /**
     * The TestEcho model constructor.
     * @property {module:model/TestEcho}
     */
    TestEcho: TestEcho,
    /**
     * The TestValidate model constructor.
     * @property {module:model/TestValidate}
     */
    TestValidate: TestValidate,
    /**
     * The TestValidateHeader model constructor.
     * @property {module:model/TestValidateHeader}
     */
    TestValidateHeader: TestValidateHeader,
    /**
     * The TestValidateQuery model constructor.
     * @property {module:model/TestValidateQuery}
     */
    TestValidateQuery: TestValidateQuery,
    /**
     * The Thumbnail model constructor.
     * @property {module:model/Thumbnail}
     */
    Thumbnail: Thumbnail,
    /**
     * The UpdatedMedia model constructor.
     * @property {module:model/UpdatedMedia}
     */
    UpdatedMedia: UpdatedMedia,
    /**
     * The UpdatedMediaDataList model constructor.
     * @property {module:model/UpdatedMediaDataList}
     */
    UpdatedMediaDataList: UpdatedMediaDataList,
    /**
     * The Url model constructor.
     * @property {module:model/Url}
     */
    Url: Url,
    /**
     * The Urls model constructor.
     * @property {module:model/Urls}
     */
    Urls: Urls,
    /**
     * The UserDetails model constructor.
     * @property {module:model/UserDetails}
     */
    UserDetails: UserDetails,
    /**
     * The UserPostRequest model constructor.
     * @property {module:model/UserPostRequest}
     */
    UserPostRequest: UserPostRequest,
    /**
     * The UserPostResponse model constructor.
     * @property {module:model/UserPostResponse}
     */
    UserPostResponse: UserPostResponse,
    /**
     * The Video model constructor.
     * @property {module:model/Video}
     */
    Video: Video,
    /**
     * The VideoAssets model constructor.
     * @property {module:model/VideoAssets}
     */
    VideoAssets: VideoAssets,
    /**
     * The VideoDataList model constructor.
     * @property {module:model/VideoDataList}
     */
    VideoDataList: VideoDataList,
    /**
     * The VideoSearchResults model constructor.
     * @property {module:model/VideoSearchResults}
     */
    VideoSearchResults: VideoSearchResults,
    /**
     * The VideoSizeDetails model constructor.
     * @property {module:model/VideoSizeDetails}
     */
    VideoSizeDetails: VideoSizeDetails,
    /**
     * The AudioApi service constructor.
     * @property {module:api/AudioApi}
     */
    AudioApi: AudioApi,
    /**
     * The ContributorsApi service constructor.
     * @property {module:api/ContributorsApi}
     */
    ContributorsApi: ContributorsApi,
    /**
     * The EditorialApi service constructor.
     * @property {module:api/EditorialApi}
     */
    EditorialApi: EditorialApi,
    /**
     * The ImagesApi service constructor.
     * @property {module:api/ImagesApi}
     */
    ImagesApi: ImagesApi,
    /**
     * The TestApi service constructor.
     * @property {module:api/TestApi}
     */
    TestApi: TestApi,
    /**
     * The UsersApi service constructor.
     * @property {module:api/UsersApi}
     */
    UsersApi: UsersApi,
    /**
     * The VideosApi service constructor.
     * @property {module:api/VideosApi}
     */
    VideosApi: VideosApi
  };

  exports.setBasicAuth = function(username, password) {
    exports.ApiClient.instance.authentications['basic'].username = username;
    exports.ApiClient.instance.authentications['basic'].password = password;
  };

  exports.setAccessToken = function(token) {
    exports.ApiClient.instance.authentications['customer_accessCode'].accessToken = token;
  };

  exports.ApiClient.instance.defaultHeaders = {
    'User-Agent': 'public-api-sdk-generator/{{projectVersion}}'
  };

  return exports;
}));
