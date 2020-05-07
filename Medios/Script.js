function Movie_OnStart(){VideoPlay("video");
VideoSetVolume("video",0);
SoundPlay("Musica_practica 3_4", true);
SoundSetVolume("Musica_practica 3_4", 70);
}

function Frame__0_0(ID){Pause();

}

function Frame__1_0(ID){Pause();

}

function pause_OnClick(){VideoPause("video");
SoundPlay("Boton sonido", false);
SoundSetVolume("Boton sonido", 70);
}

function pause_OnRelease(){VideoResume("video");
SoundPlay("Boton sonido", false);
SoundSetVolume("Boton sonido", 70);
}

function mute_OnClick(){VideoSetVolume("video",100);
SoundPlay("Boton sonido", false);
SoundSetVolume("Boton sonido", 70);
}

function mute_OnRelease(){VideoSetVolume("video",0);
SoundPlay("Boton sonido", false);
SoundSetVolume("Boton sonido", 70);
}

function irasonido_OnClick(){GotoSceneNameAndPlay("audio",0);
SoundPlay("Boton sonido", false);
SoundSetVolume("Boton sonido", 70);
}

function music_OnClick(){SoundPause("Musica_practica 3_4");
SoundPlay("Boton sonido", false);
SoundSetVolume("Boton sonido", 70);
}

function music_OnRelease(){SoundResume("Musica_practica 3_4");
SoundPlay("Boton sonido", false);
SoundSetVolume("Boton sonido", 70);
}

function iravideo_OnClick(){GotoSceneNameAndPlay("video",0);
SoundPlay("Boton sonido", false);
SoundSetVolume("Boton sonido", 70);
}

