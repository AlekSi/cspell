export { CSpellUserSettings, CSpellUserSettingsWithComments } from './Settings';
export { TextOffset, TextDocumentOffset } from './util/text';
export { validateText } from './validator';
export {
    mergeSettings,
    readSettings,
    readSettingsFiles,
    defaultFileName as defaultSettingsFilename,
    clearCachedFiles as clearCachedSettings,
    calcOverrideSettings
} from './Settings';
export { SpellingDictionary, createSpellingDictionary, createSpellingDictionaryRx, getDictionary } from './SpellingDictionary';
export { getDefaultSettings, getGlobalSettings } from './Settings';
export { combineTextAndLanguageSettings } from './Settings/TextDocumentSettings';
export { combineTextAndLanguageSettings as constructSettingsForText } from './Settings/TextDocumentSettings';

import * as Text from './util/text';
export { Text };

import * as ExclusionHelper from './exclusionHelper';
export { ExclusionHelper };
export {
    ExcludeFilesGlobMap,
    ExclusionFunction,
    Glob,
} from './exclusionHelper';

export { getLanguagesForExt } from './LanguageIds';
