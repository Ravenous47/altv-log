/// <reference types="@altv/types-server" />
import alt from 'alt-server';

export function log(message) {
    alt.log(message)
    alt.emitClient(null, 'log', message);
}