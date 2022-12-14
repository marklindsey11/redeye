import path from 'path';
import { DatabaseMode } from './config';

export const getRuntimeDir = () => {
	if (process.pkg) {
		return path.resolve(process.execPath, '..');
	} else {
		return path.join(__dirname, '..');
	}
};

export function getRootPath(): string {
	return path.join(getRuntimeDir());
}

export const getDbPath = (databaseMode: DatabaseMode): string => {
	const saveDb = databaseMode !== DatabaseMode.PRODUCTION;
	return saveDb ? path.join(getRootPath(), 'dev-databases') : getRootPath();
};

export const getDatabaseFolderPath = (campaignId: string, databaseMode: DatabaseMode): string =>
	`${getDbPath(databaseMode)}/campaign/${campaignId}`;

export const getFullCampaignDbPath = (campaignId: string, databaseMode: DatabaseMode): string =>
	`${getDatabaseFolderPath(campaignId, databaseMode)}/db.redeye`;
