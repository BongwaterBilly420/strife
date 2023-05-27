import { FluxDispatcher } from "@vendetta/metro/common";
import { findByProps, findByStoreName } from "@vendetta/metro";
import { logger } from "@vendetta";

const { getSerializedState } = findByProps("getSerializedState");
const { getCurrentUser } = findByStoreName("UserStore");

// This is in a seperate file to make editing easier in future should Discord ever change the method again
export function enable() { 
    try {
        // Add 1 (staff) to local user flags
        getCurrentUser().flags += 1;

        // Filter for Flux action handlers on event OVERLAY_INITIALIZE that have "Experiment" in their name
        const actionHandlers = FluxDispatcher._actionHandlers._computeOrderedActionHandlers("OVERLAY_INITIALIZE").filter(e => e.name.includes("Experiment"));

        // Call those action handlers with fake data
        actionHandlers.forEach(({ actionHandler }) => actionHandler({
            serializedExperimentStore: getSerializedState(),
            user: { flags: 1 },
        }));
    } catch(e) {
        logger.error(`Experiments: Failed to enable experiments...`, e);
    }
}

export function payload() { 
    FluxDispatcher.unsubscribe("CONNECTION_OPEN", payload); 
    enable();
}