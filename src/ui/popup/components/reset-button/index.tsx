import { Button } from "../../../../ui/controls";
import { m } from "malevic";
import { getLocalMessage } from "../../../../utils/locales";
import UserStorage from "../../../../background/user-storage";
import { ExtensionActions } from "../../../../definitions";

interface ResetButtonProps {
    actions: ExtensionActions
}

export default function ResetButton({actions}: ResetButtonProps) {

    const userStorage = new UserStorage();

    function resetConfig() {
        userStorage.settings =  userStorage.defaultSettings
        userStorage.saveSettings();
        actions.changeSettings(userStorage.settings);
    }

    return (
        <Button
            class="reset-button"
            onclick={resetConfig}
        >
            {getLocalMessage('reset_configuration')}
        </Button>
    )
}