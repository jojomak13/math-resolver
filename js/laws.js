let laws = {
    rms: {
        name:   'Root Mean Square',
        inputs: ['V'],
        role:   (v) => v / Math.sqrt(2),
        unit:   ''
    },
    frecquency: {
        name:   'Frecquency',
        inputs: ['time'],
        role:   (time) => 1 / time,
        unit:   'Hz'
    },
    bandwidth: {
        name:   'Bandwidth',
        inputs: ['high', 'low'],
        role:   (high, low) => high - low,
        unit:   'Hz'
    },
    numberOfBits: {
        name:   'Number Of Bits',
        inputs: ['delay', 'bandwidth'],
        role:   (delay, bandwidth) => delay * bandwidth,
        unit:   'bit'
    },
    minBandwidth: {
        name:   'Minimum Bandwidth',
        inputs: ['bitrate'],
        role:   (bitrate) => bitrate / 2,
        unit:   'Hz'
    },
    fHarmonic: {
        name:   '1, 3 Harmonic',
        inputs: ['minBandwidth'],
        role:   (minBandwidth) => 3 * minBandwidth,
        unit:   'Hz'
    },
    lHarmonic: {
        name:   '1, 3, 5 Harmonic',
        inputs: ['minBandwidth'],
        role:   (minBandwidth) => 5 * minBandwidth,
        unit:   'Hz'
    },
    db: {
        name:   'Decibel',
        inputs: ['p1', 'p2'],
        role:   (p1, p2) => 10 * Math.log10(p2/p1),
        unit:   ''
    },
    snr: {
        name:   'Signal Noise Ratio',
        inputs: ['signalpower', 'noisePower'],
        role:   (signalpower, noisePower) => signalpower / noisePower,
        unit:   ''
    },
    snrDB: {
        name:   'Signal Noise Ratio DB',
        inputs: ['snr'],
        role:   (snr) => 10 * Math.log10(snr),
        unit:   ''
    },
    nyquist: {
        name:   'Nyquist',
        inputs: ['b', 'l'],
        role:   (b, l) => (2*b) * Math.log2(l),
        unit:   'Hz'
    },
    shanon: {
        name:   'Shanon',
        inputs: ['b', 'snr'],
        role:   (b, snr) => b * Math.log2(1 + snr),
        unit:   'Hz'
    },
    propDelay: {
        name:   'Prop Delay',
        inputs: ['distance', 'speed'],
        role:   (distance, speed) => distance / speed,
        unit:   's'
    },
    transDelay: {
        name:   'Transmission Delay',
        inputs: ['msgSize', 'bandwidth'],
        role:   (msgSize, bandwidth) => msgSize / bandwidth,
        unit:   's'
    },
    latency: {
        name:   'Latency',
        inputs: ['propDelay', 'transDelay', 'queueTime', 'processTime'],
        role:   (propDelay, transDelay, queueTime, processTime) => propDelay + transDelay + queueTime + processTime,
        unit:   's'
    },
    baudRate: {
        name:   'Baud Rate',
        inputs: ['c', 'n', 'r'],
        role:   (c, n, r) => c*n*(1/r),
        unit:   'baud'
    },
    nMax: {
        name:   'nMax',
        inputs: ['c', 'b', 'r'],
        role:   (c, b, r) => (1/c) * b * r,
        unit:   ''
    },
    signalRate: {
        name:   'Signal Rate',
        inputs: ['c', 'n', 'r'],
        role:   (c, n, r) => c*n*r,
        unit:   ''
    },
    samplingRate: {
        name:   'Sampling Rate',
        inputs: ['f'],
        role:   (f) => 2 * f,
        unit:   ''
    },
    height: {
        name:   'Height',
        inputs: ['max', 'min', 'L'],
        role:   (max, min, L) => (max - min) / L,
        unit:   ''
    },
    bitRate: {
        name:   'Bit Rate',
        inputs: ['n', 'r'],
        role:   (n, r) => n + (1/r),
        unit:   ''
    },
    carrierFreq: {
        name:   'Carrier Frecquency',
        inputs: ['d', 's'],
        role:   (d, s) => (1 + d) * s,
        unit:   'Hz'
    },
};
