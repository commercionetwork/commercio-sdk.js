/**
 * @typedef {Object} BuyMembership
 * @property {String} membership_type
 * @property {String} buyer
 */

/**
 * @typedef {Object} InviteUser
 * @property {String} recipient
 * @property {String} sender
 */

/**
 * @typedef {Object} StdMsg
 * @property {String} type
 * @property {BuyMembership | InviteUser} value
 */
"use strict";