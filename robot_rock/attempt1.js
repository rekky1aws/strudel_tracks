setcpm(112)

// $: s("bd mt lt -")  

$: s("<bd!7 [bd bd - -]>")
    .speed("<0.9!7 [1 0.8 1 1]>")

   // .lpf(1000)
   // .speed("<1!7 [1.2 0.9 - -]}>")

$: note("<[d3, a3, d4]!7 [[a3, d4, e4] [c3, g3, c4, d4]@2]>")
    .sound("gm_overdriven_guitar")
    .decay(0.5)
    .sustain(0)
    .lpf(400)
    .trans(-12)
    .lpenv(1)
    .scope()

$: note("<[d2]!7 [[a2] [c2]@2]>")
    .distort("8:.4")
    .postgain(0.2)
    .sound("gm_synth_bass_2")
    .trans(0)
    .decay(0.3)
    .sustain(0)
