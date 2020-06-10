import IAction from "./IAction";
import IPerformedAction from "./IPerformedAction";
import Meta from "./Meta";

/**
 * @description Interface to define what structure the Finsemble notification service is able to process
 *
 * @property {string} id - Either sent when notification is created to refer to id an external |
 * system or if null set to UUID.
 * @property {string} issuedAt ISO8601 date format - When the notification occurred.
 * @property {string} type - Type of notification.
 * @property {string} title - Main display title.
 * @property {string} source - The source that the notification originates from.
 * @property {string} details - Details about the notification mainly for display purposes.
 * @property {string} headerText - An informational header additional to the title usually referencing the source.
 * @property {string} headerLogo - Logo to display in header section of a notification. HTML source data URI or URL, or CSS class. Defaults set by type in configuration.
 * @property {string} contentLogo - Logo to display in content section of a notification.HTML source data URI or URL, or CSS class. Defaults set by type in configuration.
 * @property {IAction[]} actions - List of actions which can be performed on a notification.
 * @property {number} timeout - How long should the notification appear in the UIs.
 * @property {Meta} meta - Additional metadata to be pass along with notification, which supports arbitrary metadata fields. For example, a team may decide to include a Source or Channel field in all notifications to support filtering operations, or a Quote or Customer ID field to support grouping of notifications generated by different systems but relating to the same entity (for example for filtering/drill down in the Notification Center).
 * @property {Boolean} isRead - if an action (other than snooze) has been performed.
 * @property {Boolean} isSnoozed - if the notification is snoozed.
 * @property {IPerformedAction[]} actionsHistory - list of actions which have been performed on a notification.
 *
 */
export default interface INotification {
	id?: string;
	issuedAt: string;
	receivedAt?: string;
	type?: string;
	source?: string;
	title: string;
	details?: string;
	headerText?: string;
	headerLogo?: string;
	contentLogo?: string;
	actions?: IAction[];
	timeout?: number;
	cssClassName?: string;
	notificationAlertSound?: string;
	meta?: Meta;
	isRead: boolean;
	isSnoozed: boolean;

	actionsHistory?: IPerformedAction[];
	stateHistory: INotification[];
}
