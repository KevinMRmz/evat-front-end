import axios from "axios";
import {
  NOTIFICATION_REQUEST,
  NOT_SEEN_NOTIFICATION,
  CONFIRM_NOTIFICATION,
} from "../../constants/requests";

/**
 * @typedef {Object} NotificationObject
 * @property {String} title
 * @property {String} description
 * @property {mongoose.Types.ObjectId} idTransmitter
 * @property {mongoose.Types.ObjectId} idDoctor
 * @property {mongoose.Types.ObjectId} idPatient
 * @property {Boolean} gotIt
 */

export class NotificationsService {
  /**
   * @desc     Request to create a new notification
   * @param    {NotificationObject} notificationInfo
   * @returns  Notification created
   * @access   Authorized for users with NURSE role
   * @method   POST
   */
  async postNotification(notificationInfo) {
    const { data } = await axios.post(NOTIFICATION_REQUEST, {
      ...notificationInfo,
    });
    return data.result;
  }

  /**
   * @desc     Request to delete a notification
   * @param    {String} id
   * @returns  Notification deleted
   * @access   Authorized for users with NURSE role
   * @method   DELETE
   */
  async deleteNotification(id) {
    const { data } = await axios.delete(NOTIFICATION_REQUEST + id);
    return data.result;
  }

  /**
   * @desc     Request to set the notification as seen
   * @param    {String} id
   * @returns  Notification updated
   * @access   Authorized for users with NURSE role
   * @method   PATCH
   */
  async confirmNotification(id) {
    const { data } = await axios.patch(CONFIRM_NOTIFICATION + id);
    return data.result;
  }

  /**
   * @desc     Request to set the notification as not seen
   * @param    {String} id
   * @returns  Notification updated
   * @access   Authorized for users with NURSE role
   * @method   PATCH
   */
  async notSeenNotification(id) {
    const { data } = await axios.patch(NOT_SEEN_NOTIFICATION + id);
    return data.result;
  }
}
