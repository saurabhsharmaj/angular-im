import { Feature } from './feature';

export class ImConfig {
    id: number;
    ipaddress: string;
    hostname: string;
    os: string;
    arch: string;
    freePhysicalMemorySize: String;
    freeSwapSpaceSize: String;
    processCpuTime: String;
    systemCpuLoad: String;

    totalPhysicalMemorySize: String;
    totalSwapSpaceSize: String;
    processCpuLoad: String;
    availableProcessors: String;
    systemLoadAverage: String;

    feature: Feature[];
}