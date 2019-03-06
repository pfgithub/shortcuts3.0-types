"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coercionTypesMap = { WFContentItem: true, WFAppStoreAppContentItem: true, WFArticleContentItem: true, WFBooleanContentItem: true, WFContactContentItem: true, WFDateContentItem: true, WFDictionaryContentItem: true, WFEmailAddressContentItem: true, WFGenericFileContentItem: true, WFImageContentItem: true, WFMPMediaContentItem: true, WFiTunesProductContentItem: true, WFLocationContentItem: true, WFDCMapsLinkContentItem: true, WFAVAssetContentItem: true, WFNumberContentItem: true, WFPDFContentItem: true, WFPhoneNumberContentItem: true, WFPhotoMediaContentItem: true, WFMKMapItemContentItem: true, WFRichTextContentItem: true, WFSafariWebPageContentItem: true, WFStringContentItem: true, WFURLContentItem: true, WFVCardContentItem: true };
function isCoercionTypeClass(name) {
    return !!coercionTypesMap[name];
}
exports.isCoercionTypeClass = isCoercionTypeClass;
const propertyNameMap = { ofratingsthisversion: true, ofratings: true, albumartist: true, albumartwork: true, albumtrack: true, album: true, altitude: true, artist: true, artworkurl: true, artwork: true, author: true, birthday: true, cameramake: true, cameramodel: true, category: true, city: true, comments: true, company: true, composer: true, contactphoto: true, contentrating: true, country: true, creationdate: true, currencycode: true, dateadded: true, datetaken: true, department: true, description: true, disc: true, downloadsize: true, duration: true, emailaddress: true, excerpt: true, fileextension: true, filesize: true, firstname: true, formattedprice: true, framerate: true, genre: true, group: true, hasalbumartwork: true, hasphoto: true, height: true, ipadscreenshoturls: true, isascreenshot: true, isclouditem: true, isexplicit: true, isfavorite: true, ishidden: true, isuniversal: true, jobtitle: true, keys: true, lastmodifieddate: true, lastname: true, lastplayeddate: true, lastupdated: true, latitude: true, location: true, longitude: true, lyrics: true, mainimageurl: true, mediakind: true, mediatype: true, metadatadictionary: true, middlename: true, minimumosversion: true, name: true, nickname: true, notes: true, numberofwords: true, orientation: true, pagecontents: true, pageselection: true, pageurl: true, phonenumber: true, phoneticfirstname: true, phoneticlastname: true, phoneticmiddlename: true, phototype: true, playcount: true, prefix: true, price: true, publisheddate: true, ratingthisversion: true, rating: true, releasedate: true, releasenotes: true, screenshoturls: true, skipcount: true, state: true, storeid: true, storeurl: true, streamable: true, streetaddress: true, street: true, suffix: true, supporteddevices: true, supportedlanguages: true, supportsgamecenter: true, timetaken: true, title: true, url: true, values: true, version: true, width: true, zipcode: true };
function isAggrandizementPropertyName(name) {
    return !!propertyNameMap[name];
}
exports.isAggrandizementPropertyName = isAggrandizementPropertyName;
