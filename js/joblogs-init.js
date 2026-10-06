2026-10-06T01:44:31.3255644Z Current runner version: '2.337.0'
2026-10-06T01:44:31.3272223Z ##[group]Runner Image Provisioner
2026-10-06T01:44:31.3272829Z Hosted Compute Agent
2026-10-06T01:44:31.3273183Z Version: 20260901.588
2026-10-06T01:44:31.3273586Z Commit: f88ec8081b781fac6c440065ac7ff9e710ce3d0b
2026-10-06T01:44:31.3274061Z Build Date: 2026-09-01T19:56:44Z
2026-10-06T01:44:31.3274464Z Worker ID: {6638b506-a84e-4547-b1f9-6f400fbcaa42}
2026-10-06T01:44:31.3274930Z Azure Region: centralus
2026-10-06T01:44:31.3275281Z ##[endgroup]
2026-10-06T01:44:31.3276199Z ##[group]Operating System
2026-10-06T01:44:31.3276601Z Ubuntu
2026-10-06T01:44:31.3276917Z 24.04.5
2026-10-06T01:44:31.3277259Z LTS
2026-10-06T01:44:31.3277572Z ##[endgroup]
2026-10-06T01:44:31.3277898Z ##[group]Runner Image
2026-10-06T01:44:31.3278336Z Image: ubuntu-24.04
2026-10-06T01:44:31.3278676Z Version: 20260927.320.1
2026-10-06T01:44:31.3279454Z Included Software: https://github.com/actions/runner-images/blob/ubuntu24/20260927.320/images/ubuntu/Ubuntu2404-Readme.md
2026-10-06T01:44:31.3280310Z Image Release: https://github.com/actions/runner-images/releases/tag/ubuntu24%2F20260927.320
2026-10-06T01:44:31.3281105Z ##[endgroup]
2026-10-06T01:44:31.3281805Z ##[group]GITHUB_TOKEN Permissions
2026-10-06T01:44:31.3283154Z Contents: read
2026-10-06T01:44:31.3283519Z Metadata: read
2026-10-06T01:44:31.3284158Z Packages: read
2026-10-06T01:44:31.3284493Z ##[endgroup]
2026-10-06T01:44:31.3285736Z Secret source: Actions
2026-10-06T01:44:31.3286321Z Cache mode: write
2026-10-06T01:44:31.3286733Z Prepare workflow directory
2026-10-06T01:44:31.3487046Z Prepare all required actions
2026-10-06T01:44:31.3518115Z Getting action download info
2026-10-06T01:44:31.5738441Z Download action repository 'actions/checkout@v4' (SHA:11d5960a326750d5838078e36cf38b85af677262)
2026-10-06T01:44:31.8446221Z Complete job name: diagnose
2026-10-06T01:44:31.9074605Z ##[group]Run actions/checkout@v4
2026-10-06T01:44:31.9074983Z with:
2026-10-06T01:44:31.9075224Z   repository: ICE-EFOOTBALLHUB/FROZT-ENGINE
2026-10-06T01:44:31.9077150Z   token: ***
2026-10-06T01:44:31.9077368Z   ssh-strict: true
2026-10-06T01:44:31.9077592Z   ssh-user: git
2026-10-06T01:44:31.9077820Z   persist-credentials: true
2026-10-06T01:44:31.9078070Z   clean: true
2026-10-06T01:44:31.9078317Z   sparse-checkout-cone-mode: true
2026-10-06T01:44:31.9078581Z   fetch-depth: 1
2026-10-06T01:44:31.9078801Z   fetch-tags: false
2026-10-06T01:44:31.9079031Z   show-progress: true
2026-10-06T01:44:31.9079259Z   lfs: false
2026-10-06T01:44:31.9079470Z   submodules: false
2026-10-06T01:44:31.9079700Z   set-safe-directory: true
2026-10-06T01:44:31.9079960Z   allow-unsafe-pr-checkout: false
2026-10-06T01:44:31.9080288Z ##[endgroup]
2026-10-06T01:44:31.9716944Z Syncing repository: ICE-EFOOTBALLHUB/FROZT-ENGINE
2026-10-06T01:44:31.9718292Z ##[group]Getting Git version info
2026-10-06T01:44:31.9718963Z Working directory is '/home/runner/work/FROZT-ENGINE/FROZT-ENGINE'
2026-10-06T01:44:31.9719800Z [command]/usr/bin/git version
2026-10-06T01:44:31.9749787Z git version 2.55.0
2026-10-06T01:44:31.9761740Z ##[endgroup]
2026-10-06T01:44:31.9794121Z Temporarily overriding HOME='/home/runner/work/_temp/46878122-f743-4a75-bfdf-9916f469513d' before making global git config changes
2026-10-06T01:44:31.9795303Z Adding repository directory to the temporary git global config as a safe directory
2026-10-06T01:44:31.9797817Z [command]/usr/bin/git config --global --add safe.directory /home/runner/work/FROZT-ENGINE/FROZT-ENGINE
2026-10-06T01:44:32.0838025Z Deleting the contents of '/home/runner/work/FROZT-ENGINE/FROZT-ENGINE'
2026-10-06T01:44:32.0840522Z ##[group]Initializing the repository
2026-10-06T01:44:32.0843834Z [command]/usr/bin/git init /home/runner/work/FROZT-ENGINE/FROZT-ENGINE
2026-10-06T01:44:32.1193462Z hint: Using 'master' as the name for the initial branch. This default branch name
2026-10-06T01:44:32.1194278Z hint: will change to "main" in Git 3.0. To configure the initial branch name
2026-10-06T01:44:32.1194779Z hint: to use in all of your new repositories, which will suppress this warning,
2026-10-06T01:44:32.1195379Z hint: call:
2026-10-06T01:44:32.1195592Z hint:
2026-10-06T01:44:32.1195875Z hint: 	git config --global init.defaultBranch <name>
2026-10-06T01:44:32.1196309Z hint:
2026-10-06T01:44:32.1196794Z hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
2026-10-06T01:44:32.1197290Z hint: 'development'. The just-created branch can be renamed via this command:
2026-10-06T01:44:32.1197672Z hint:
2026-10-06T01:44:32.1198022Z hint: 	git branch -m <name>
2026-10-06T01:44:32.1198407Z hint:
2026-10-06T01:44:32.1198927Z hint: Disable this message with "git config set advice.defaultBranchName false"
2026-10-06T01:44:32.1199835Z Initialized empty Git repository in /home/runner/work/FROZT-ENGINE/FROZT-ENGINE/.git/
2026-10-06T01:44:32.1204352Z [command]/usr/bin/git remote add origin https://github.com/ICE-EFOOTBALLHUB/FROZT-ENGINE
2026-10-06T01:44:32.1285675Z ##[endgroup]
2026-10-06T01:44:32.1286290Z ##[group]Disabling automatic garbage collection
2026-10-06T01:44:32.1287956Z [command]/usr/bin/git config --local gc.auto 0
2026-10-06T01:44:32.1481766Z ##[endgroup]
2026-10-06T01:44:32.1482451Z ##[group]Setting up auth
2026-10-06T01:44:32.1486564Z [command]/usr/bin/git config --local --name-only --get-regexp core\.sshCommand
2026-10-06T01:44:32.1512796Z [command]/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'core\.sshCommand' && git config --local --unset-all 'core.sshCommand' || :"
2026-10-06T01:44:32.1795015Z [command]/usr/bin/git config --local --name-only --get-regexp http\.https\:\/\/github\.com\/\.extraheader
2026-10-06T01:44:32.1820691Z [command]/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'http\.https\:\/\/github\.com\/\.extraheader' && git config --local --unset-all 'http.https://github.com/.extraheader' || :"
2026-10-06T01:44:32.1984055Z [command]/usr/bin/git config --local --name-only --get-regexp ^includeIf\.gitdir:
2026-10-06T01:44:32.2009315Z [command]/usr/bin/git submodule foreach --recursive git config --local --show-origin --name-only --get-regexp remote.origin.url
2026-10-06T01:44:32.2174855Z [command]/usr/bin/git config --local http.https://github.com/.extraheader AUTHORIZATION: basic ***
2026-10-06T01:44:32.2748424Z ##[endgroup]
2026-10-06T01:44:32.2749306Z ##[group]Fetching the repository
2026-10-06T01:44:32.2755219Z [command]/usr/bin/git -c protocol.version=2 fetch --no-tags --prune --no-recurse-submodules --depth=1 origin +4e62aaa0411e5b7ad376628dd06e23ad6af27f9d:refs/remotes/origin/main
2026-10-06T01:44:32.5990448Z From https://github.com/ICE-EFOOTBALLHUB/FROZT-ENGINE
2026-10-06T01:44:32.5991504Z  * [new ref]         4e62aaa0411e5b7ad376628dd06e23ad6af27f9d -> origin/main
2026-10-06T01:44:32.6002137Z ##[endgroup]
2026-10-06T01:44:32.6002925Z ##[group]Determining the checkout info
2026-10-06T01:44:32.6003826Z ##[endgroup]
2026-10-06T01:44:32.6004335Z [command]/usr/bin/git sparse-checkout disable
2026-10-06T01:44:32.6102486Z [command]/usr/bin/git config --local --unset-all extensions.worktreeConfig
2026-10-06T01:44:32.6202002Z ##[group]Checking out the ref
2026-10-06T01:44:32.6205283Z [command]/usr/bin/git checkout --progress --force -B main refs/remotes/origin/main
2026-10-06T01:44:32.6490709Z Switched to a new branch 'main'
2026-10-06T01:44:32.6496652Z branch 'main' set up to track 'origin/main'.
2026-10-06T01:44:32.6504688Z ##[endgroup]
2026-10-06T01:44:32.6706283Z [command]/usr/bin/git log -1 --format=%H
2026-10-06T01:44:32.6727915Z 4e62aaa0411e5b7ad376628dd06e23ad6af27f9d
2026-10-06T01:44:32.6960742Z ##[group]Run mkdir -p n1_extracted
2026-10-06T01:44:32.6961333Z [36;1mmkdir -p n1_extracted[0m
2026-10-06T01:44:32.6961891Z [36;1munzip -q "Frozt_N1_First_Native_Playable_Preparation_Locked_v1.0.zip" -d n1_extracted[0m
2026-10-06T01:44:32.7297460Z shell: /usr/bin/bash -e {0}
2026-10-06T01:44:32.7297801Z ##[endgroup]
2026-10-06T01:44:32.7600746Z ##[group]Run echo "===== ANDROID PROJECT ====="
2026-10-06T01:44:32.7601381Z [36;1mecho "===== ANDROID PROJECT ====="[0m
2026-10-06T01:44:32.7602029Z [36;1mfind n1_extracted/f9_release/android -maxdepth 5 -type f | sort[0m
2026-10-06T01:44:32.7602523Z [36;1m[0m
2026-10-06T01:44:32.7602748Z [36;1mecho ""[0m
2026-10-06T01:44:32.7603018Z [36;1mecho "===== NATIVE PROJECT ====="[0m
2026-10-06T01:44:32.7603512Z [36;1mfind n1_extracted/f9_release/native -maxdepth 4 -type f | sort[0m
2026-10-06T01:44:32.7649519Z shell: /usr/bin/bash -e {0}
2026-10-06T01:44:32.7649854Z ##[endgroup]
2026-10-06T01:44:32.7712880Z ===== ANDROID PROJECT =====
2026-10-06T01:44:32.7726924Z n1_extracted/f9_release/android/README.md
2026-10-06T01:44:32.7727542Z n1_extracted/f9_release/android/app/build.gradle
2026-10-06T01:44:32.7728222Z n1_extracted/f9_release/android/app/src/main/AndroidManifest.xml
2026-10-06T01:44:32.7729065Z n1_extracted/f9_release/android/app/src/main/assets/game.fzt
2026-10-06T01:44:32.7729960Z n1_extracted/f9_release/android/app/src/main/cpp/CMakeLists.txt
2026-10-06T01:44:32.7730999Z n1_extracted/f9_release/android/app/src/main/cpp/frozt_android.cpp
2026-10-06T01:44:32.7731896Z n1_extracted/f9_release/android/app/src/main/cpp/frozt_android_jni.c
2026-10-06T01:44:32.7732532Z n1_extracted/f9_release/android/build.gradle
2026-10-06T01:44:32.7733143Z n1_extracted/f9_release/android/settings.gradle
2026-10-06T01:44:32.7733590Z 
2026-10-06T01:44:32.7733763Z ===== NATIVE PROJECT =====
2026-10-06T01:44:32.7742083Z n1_extracted/f9_release/native/CMakeLists.txt
2026-10-06T01:44:32.7742699Z n1_extracted/f9_release/native/README.md
2026-10-06T01:44:32.7796752Z n1_extracted/f9_release/native/include/frozt_host.h
2026-10-06T01:44:32.7797585Z n1_extracted/f9_release/native/include/frozt_package.h
2026-10-06T01:44:32.7798274Z n1_extracted/f9_release/native/include/frozt_renderer.h
2026-10-06T01:44:32.7798924Z n1_extracted/f9_release/native/src/host.c
2026-10-06T01:44:32.7799567Z n1_extracted/f9_release/native/src/host_smoke.c
2026-10-06T01:44:32.7800178Z n1_extracted/f9_release/native/src/package.c
2026-10-06T01:44:32.7800809Z n1_extracted/f9_release/native/src/quickjs_adapter.c
2026-10-06T01:44:32.7801652Z n1_extracted/f9_release/native/src/renderer.c
2026-10-06T01:44:32.7802292Z n1_extracted/f9_release/native/src/sdl_adapter.c
2026-10-06T01:44:32.8106715Z ##[group]Run echo "===== AndroidManifest.xml ====="
2026-10-06T01:44:32.8107167Z [36;1mecho "===== AndroidManifest.xml ====="[0m
2026-10-06T01:44:32.8107693Z [36;1mcat n1_extracted/f9_release/android/app/src/main/AndroidManifest.xml[0m
2026-10-06T01:44:32.8152863Z shell: /usr/bin/bash -e {0}
2026-10-06T01:44:32.8153160Z ##[endgroup]
2026-10-06T01:44:32.8412283Z ===== AndroidManifest.xml =====
2026-10-06T01:44:32.8420160Z <manifest xmlns:android="http://schemas.android.com/apk/res/android">
2026-10-06T01:44:32.8421631Z     <application android:theme="@style/AppTheme" android:label="FROZT Runner" android:allowBackup="false" android:supportsRtl="true">
2026-10-06T01:44:32.8423225Z         <activity android:name=".MainActivity" android:screenOrientation="portrait" android:exported="true">
2026-10-06T01:44:32.8424217Z             <intent-filter>
2026-10-06T01:44:32.8425198Z                 <action android:name="android.intent.action.MAIN"/><category android:name="android.intent.category.LAUNCHER"/>
2026-10-06T01:44:32.8426247Z             </intent-filter>
2026-10-06T01:44:32.8426645Z         </activity>
2026-10-06T01:44:32.8426992Z     </application>
2026-10-06T01:44:32.8427333Z </manifest>
2026-10-06T01:44:32.9610590Z ##[group]Run echo "===== app/build.gradle ====="
2026-10-06T01:44:32.9611310Z [36;1mecho "===== app/build.gradle ====="[0m
2026-10-06T01:44:32.9611949Z [36;1mcat n1_extracted/f9_release/android/app/build.gradle[0m
2026-10-06T01:44:32.9612557Z [36;1m[0m
2026-10-06T01:44:32.9612877Z [36;1mecho ""[0m
2026-10-06T01:44:32.9613280Z [36;1mecho "===== Android CMakeLists.txt ====="[0m
2026-10-06T01:44:32.9614008Z [36;1mcat n1_extracted/f9_release/android/app/src/main/cpp/CMakeLists.txt[0m
2026-10-06T01:44:32.9661332Z shell: /usr/bin/bash -e {0}
2026-10-06T01:44:32.9661736Z ##[endgroup]
2026-10-06T01:44:33.0824672Z ===== app/build.gradle =====
2026-10-06T01:44:33.0831419Z plugins { id 'com.android.application' }
2026-10-06T01:44:33.0831903Z 
2026-10-06T01:44:33.0832348Z android { namespace 'com.frozt.runner'; compileSdk 35
2026-10-06T01:44:33.0833942Z     defaultConfig { applicationId 'com.frozt.runner'; minSdk 24; targetSdk 35; versionCode 1; versionName '0.1.0'
2026-10-06T01:44:33.0835546Z         externalNativeBuild { cmake { cppFlags ''; arguments '-DFROZT_ANDROID_SHELL=ON' } }
2026-10-06T01:44:33.0836550Z     }
2026-10-06T01:44:33.0837401Z     externalNativeBuild { cmake { path file('src/main/cpp/CMakeLists.txt'); version '3.22.1' } }
2026-10-06T01:44:33.0838446Z }
2026-10-06T01:44:33.0838705Z 
2026-10-06T01:44:33.0839043Z ===== Android CMakeLists.txt =====
2026-10-06T01:44:33.0839825Z cmake_minimum_required(VERSION 3.22.1)
2026-10-06T01:44:33.0840820Z project(frozt_android C)
2026-10-06T01:44:33.0841943Z set(CMAKE_C_STANDARD 11)
2026-10-06T01:44:33.0843460Z # This shell expects the FROZT native host plus QuickJS/SDL implementations to be
2026-10-06T01:44:33.0845020Z # supplied by the Android build environment. The checked-in core remains reusable.
2026-10-06T01:44:33.0847853Z add_library(frozt_android SHARED frozt_android_jni.c ../../../../../native/src/host.c ../../../../../native/src/package.c ../../../../../native/src/quickjs_adapter.c ../../../../../native/src/sdl_adapter.c ../../../../../native/src/renderer.c)
2026-10-06T01:44:33.0851302Z target_include_directories(frozt_android PRIVATE ../../../../../native/include $ENV{FROZT_QUICKJS_INCLUDE})
2026-10-06T01:44:33.1064134Z ##[group]Run echo "===== frozt_android_jni.c ====="
2026-10-06T01:44:33.1065055Z [36;1mecho "===== frozt_android_jni.c ====="[0m
2026-10-06T01:44:33.1066199Z [36;1mcat n1_extracted/f9_release/android/app/src/main/cpp/frozt_android_jni.c[0m
2026-10-06T01:44:33.1117444Z shell: /usr/bin/bash -e {0}
2026-10-06T01:44:33.1118344Z ##[endgroup]
2026-10-06T01:44:33.1220793Z ===== frozt_android_jni.c =====
2026-10-06T01:44:33.1227960Z #include <jni.h>
2026-10-06T01:44:33.1228720Z #include <android/asset_manager.h>
2026-10-06T01:44:33.1229473Z #include <android/asset_manager_jni.h>
2026-10-06T01:44:33.1230687Z #include <stdlib.h>
2026-10-06T01:44:33.1231591Z #include <string.h>
2026-10-06T01:44:33.1232366Z #include <stdio.h>
2026-10-06T01:44:33.1233134Z #include "frozt_host.h"
2026-10-06T01:44:33.1233883Z static FroztHost* g_host;
2026-10-06T01:44:33.1234494Z static JavaVM* g_vm;
2026-10-06T01:44:33.1235655Z JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void* reserved){(void)reserved;g_vm=vm;return JNI_VERSION_1_6;}
2026-10-06T01:44:33.1237511Z static void ensure_host(void){ if(g_host)return; FroztHostConfig c={0}; c.seed=0xF7057; g_host=frozt_host_create(&c); }
2026-10-06T01:44:33.1239480Z JNIEXPORT void JNICALL Java_com_frozt_runner_FroztRunnerView_nativeStart(JNIEnv* env,jobject thiz,jint w,jint h,jfloat dpi){
2026-10-06T01:44:33.1241461Z  (void)thiz; ensure_host(); AAssetManager* am=NULL; jclass cls=(*env)->GetObjectClass(env,thiz); (void)cls;
2026-10-06T01:44:33.1243169Z  /* Asset loading is intentionally isolated here; a production shell supplies the manager via its Activity. */
2026-10-06T01:44:33.1244658Z  frozt_host_resize(g_host,w,h,dpi); frozt_host_start(g_host,"frozt.runner");
2026-10-06T01:44:33.1245587Z }
2026-10-06T01:44:33.1247121Z JNIEXPORT void JNICALL Java_com_frozt_runner_FroztRunnerView_nativeResize(JNIEnv* e,jobject o,jint w,jint h,jfloat d){(void)e;(void)o;if(g_host)frozt_host_resize(g_host,w,h,d);}
2026-10-06T01:44:33.1250528Z JNIEXPORT void JNICALL Java_com_frozt_runner_FroztRunnerView_nativeInput(JNIEnv* e,jobject o,jint a,jfloat x,jfloat y,jint p){(void)e;(void)o;(void)x;(void)y;(void)p;if(g_host){char b[128];snprintf(b,sizeof b,"{\"action\":%d}",a);frozt_host_input_json(g_host,b);}}
2026-10-06T01:44:33.1253783Z JNIEXPORT void JNICALL Java_com_frozt_runner_FroztRunnerView_nativeSuspend(JNIEnv* e,jobject o){(void)e;(void)o;if(g_host)frozt_host_suspend(g_host);}
2026-10-06T01:44:33.1256254Z JNIEXPORT void JNICALL Java_com_frozt_runner_FroztRunnerView_nativeResume(JNIEnv* e,jobject o){(void)e;(void)o;if(g_host)frozt_host_resume(g_host);}
2026-10-06T01:44:33.1258817Z JNIEXPORT void JNICALL Java_com_frozt_runner_FroztRunnerView_nativeStop(JNIEnv* e,jobject o){(void)e;(void)o;if(g_host){frozt_host_stop(g_host);frozt_host_destroy(g_host);g_host=NULL;}}
2026-10-06T01:44:33.1317913Z ##[group]Run echo "===== Android source files ====="
2026-10-06T01:44:33.1318738Z [36;1mecho "===== Android source files ====="[0m
2026-10-06T01:44:33.1319612Z [36;1mfind n1_extracted/f9_release/android/app/src/main \[0m
2026-10-06T01:44:33.1320433Z [36;1m  -type f \[0m
2026-10-06T01:44:33.1321475Z [36;1m  \( -name "*.java" -o -name "*.kt" -o -name "*.cpp" -o -name "*.c" -o -name "*.h" \) \[0m
2026-10-06T01:44:33.1322476Z [36;1m  -print \[0m
2026-10-06T01:44:33.1323189Z [36;1m  -exec sh -c 'echo ""; echo "===== $1 ====="; cat "$1"' _ {} \;[0m
2026-10-06T01:44:33.1367834Z shell: /usr/bin/bash -e {0}
2026-10-06T01:44:33.1368428Z ##[endgroup]
2026-10-06T01:44:33.1431299Z ===== Android source files =====
2026-10-06T01:44:33.1441451Z n1_extracted/f9_release/android/app/src/main/cpp/frozt_android.cpp
2026-10-06T01:44:33.1446805Z 
2026-10-06T01:44:33.1447534Z ===== n1_extracted/f9_release/android/app/src/main/cpp/frozt_android.cpp =====
2026-10-06T01:44:33.1453333Z // Android entry integration point. SDL Activity + NDK build supplies the actual
2026-10-06T01:44:33.1454790Z // platform lifecycle and event translation; no Android types cross the engine API.
2026-10-06T01:44:33.1456298Z extern "C" int frozt_android_shell_version() { return 1; }
2026-10-06T01:44:33.1457308Z n1_extracted/f9_release/android/app/src/main/cpp/frozt_android_jni.c
2026-10-06T01:44:33.1459862Z 
2026-10-06T01:44:33.1460440Z ===== n1_extracted/f9_release/android/app/src/main/cpp/frozt_android_jni.c =====
2026-10-06T01:44:33.1465841Z #include <jni.h>
2026-10-06T01:44:33.1466610Z #include <android/asset_manager.h>
2026-10-06T01:44:33.1467293Z #include <android/asset_manager_jni.h>
2026-10-06T01:44:33.1467975Z #include <stdlib.h>
2026-10-06T01:44:33.1468641Z #include <string.h>
2026-10-06T01:44:33.1469397Z #include <stdio.h>
2026-10-06T01:44:33.1470142Z #include "frozt_host.h"
2026-10-06T01:44:33.1471128Z static FroztHost* g_host;
2026-10-06T01:44:33.1472099Z static JavaVM* g_vm;
2026-10-06T01:44:33.1473643Z JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void* reserved){(void)reserved;g_vm=vm;return JNI_VERSION_1_6;}
2026-10-06T01:44:33.1475783Z static void ensure_host(void){ if(g_host)return; FroztHostConfig c={0}; c.seed=0xF7057; g_host=frozt_host_create(&c); }
2026-10-06T01:44:33.1477660Z JNIEXPORT void JNICALL Java_com_frozt_runner_FroztRunnerView_nativeStart(JNIEnv* env,jobject thiz,jint w,jint h,jfloat dpi){
2026-10-06T01:44:33.1479511Z  (void)thiz; ensure_host(); AAssetManager* am=NULL; jclass cls=(*env)->GetObjectClass(env,thiz); (void)cls;
2026-10-06T01:44:33.1481642Z  /* Asset loading is intentionally isolated here; a production shell supplies the manager via its Activity. */
2026-10-06T01:44:33.1483445Z  frozt_host_resize(g_host,w,h,dpi); frozt_host_start(g_host,"frozt.runner");
2026-10-06T01:44:33.1484772Z }
2026-10-06T01:44:33.1487076Z JNIEXPORT void JNICALL Java_com_frozt_runner_FroztRunnerView_nativeResize(JNIEnv* e,jobject o,jint w,jint h,jfloat d){(void)e;(void)o;if(g_host)frozt_host_resize(g_host,w,h,d);}
2026-10-06T01:44:33.1490702Z JNIEXPORT void JNICALL Java_com_frozt_runner_FroztRunnerView_nativeInput(JNIEnv* e,jobject o,jint a,jfloat x,jfloat y,jint p){(void)e;(void)o;(void)x;(void)y;(void)p;if(g_host){char b[128];snprintf(b,sizeof b,"{\"action\":%d}",a);frozt_host_input_json(g_host,b);}}
2026-10-06T01:44:33.1493916Z JNIEXPORT void JNICALL Java_com_frozt_runner_FroztRunnerView_nativeSuspend(JNIEnv* e,jobject o){(void)e;(void)o;if(g_host)frozt_host_suspend(g_host);}
2026-10-06T01:44:33.1496806Z JNIEXPORT void JNICALL Java_com_frozt_runner_FroztRunnerView_nativeResume(JNIEnv* e,jobject o){(void)e;(void)o;if(g_host)frozt_host_resume(g_host);}
2026-10-06T01:44:33.1500842Z JNIEXPORT void JNICALL Java_com_frozt_runner_FroztRunnerView_nativeStop(JNIEnv* e,jobject o){(void)e;(void)o;if(g_host){frozt_host_stop(g_host);frozt_host_destroy(g_host);g_host=NULL;}}
2026-10-06T01:44:33.1503422Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java
2026-10-06T01:44:33.1504343Z 
2026-10-06T01:44:33.1505143Z ===== n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java =====
2026-10-06T01:44:33.1506745Z package com.frozt.runner;
2026-10-06T01:44:33.1507268Z 
2026-10-06T01:44:33.1507630Z import android.content.Context;
2026-10-06T01:44:33.1508563Z import android.view.MotionEvent;
2026-10-06T01:44:33.1509531Z import android.view.SurfaceHolder;
2026-10-06T01:44:33.1510501Z import android.view.SurfaceView;
2026-10-06T01:44:33.1511188Z 
2026-10-06T01:44:33.1512087Z /** Thin Android lifecycle/input shell. Rendering and simulation stay behind the native host. */
2026-10-06T01:44:33.1514153Z final class FroztRunnerView extends SurfaceView implements SurfaceHolder.Callback {
2026-10-06T01:44:33.1515237Z     static { System.loadLibrary("frozt_android"); }
2026-10-06T01:44:33.1515981Z     private long lastNs;
2026-10-06T01:44:33.1517266Z     FroztRunnerView(Context c) { super(c); getHolder().addCallback(this); setFocusable(true); }
2026-10-06T01:44:33.1518880Z     @Override public boolean onTouchEvent(MotionEvent e) {
2026-10-06T01:44:33.1521138Z         if (e.getActionMasked() != MotionEvent.ACTION_DOWN && e.getActionMasked() != MotionEvent.ACTION_MOVE && e.getActionMasked() != MotionEvent.ACTION_UP) return true;
2026-10-06T01:44:33.1523081Z         int action = e.getActionMasked() == MotionEvent.ACTION_UP ? 3 : (e.getY() < getHeight() * .55 ? 1 : 2);
2026-10-06T01:44:33.1525435Z         if (e.getActionMasked() == MotionEvent.ACTION_DOWN) action = e.getX() > getWidth() * .68 ? 3 : (e.getY() < getHeight() * .55 ? 1 : 2);
2026-10-06T01:44:33.1526850Z         nativeInput(action, e.getX(), e.getY(), e.getActionMasked());
2026-10-06T01:44:33.1527669Z         return true;
2026-10-06T01:44:33.1528173Z     }
2026-10-06T01:44:33.1529520Z     @Override public void surfaceCreated(SurfaceHolder h) { lastNs=System.nanoTime(); nativeStart(getWidth(),getHeight(),getResources().getDisplayMetrics().density); }
2026-10-06T01:44:33.1531886Z     @Override public void surfaceChanged(SurfaceHolder h,int f,int w,int ht) { nativeResize(w,ht,getResources().getDisplayMetrics().density); }
2026-10-06T01:44:33.1533450Z     @Override public void surfaceDestroyed(SurfaceHolder h) { nativeStop(); }
2026-10-06T01:44:33.1534374Z     void suspend(){ nativeSuspend(); }
2026-10-06T01:44:33.1535034Z     void resume(){ nativeResume(); }
2026-10-06T01:44:33.1535777Z     private native void nativeStart(int w,int h,float dpi);
2026-10-06T01:44:33.1536663Z     private native void nativeResize(int w,int h,float dpi);
2026-10-06T01:44:33.1537634Z     private native void nativeInput(int action,float x,float y,int phase);
2026-10-06T01:44:33.1538966Z     private native void nativeSuspend(); private native void nativeResume(); private native void nativeStop();
2026-10-06T01:44:33.1540072Z }
2026-10-06T01:44:33.1540835Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/MainActivity.java
2026-10-06T01:44:33.1541848Z 
2026-10-06T01:44:33.1542441Z ===== n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/MainActivity.java =====
2026-10-06T01:44:33.1543482Z package com.frozt.runner;
2026-10-06T01:44:33.1543826Z 
2026-10-06T01:44:33.1544079Z import android.app.Activity;
2026-10-06T01:44:33.1544675Z import android.os.Bundle;
2026-10-06T01:44:33.1545263Z import android.view.MotionEvent;
2026-10-06T01:44:33.1545882Z import android.view.View;
2026-10-06T01:44:33.1546454Z import android.view.Window;
2026-10-06T01:44:33.1547065Z import android.view.WindowInsets;
2026-10-06T01:44:33.1547461Z 
2026-10-06T01:44:33.1547761Z public final class MainActivity extends Activity {
2026-10-06T01:44:33.1548503Z     private FroztRunnerView view;
2026-10-06T01:44:33.1549288Z     @Override public void onCreate(Bundle state) {
2026-10-06T01:44:33.1549996Z         super.onCreate(state);
2026-10-06T01:44:33.1550662Z         requestWindowFeature(Window.FEATURE_NO_TITLE);
2026-10-06T01:44:33.1551526Z         view = new FroztRunnerView(this);
2026-10-06T01:44:33.1552180Z         setContentView(view);
2026-10-06T01:44:33.1552827Z     }
2026-10-06T01:44:33.1553626Z     @Override protected void onPause() { super.onPause(); if (view != null) view.suspend(); }
2026-10-06T01:44:33.1554942Z     @Override protected void onResume() { super.onResume(); if (view != null) view.resume(); }
2026-10-06T01:44:33.1555915Z }
2026-10-06T01:44:33.1556681Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/engine/FroztActivity.java
2026-10-06T01:44:33.1557429Z 
2026-10-06T01:44:33.1558026Z ===== n1_extracted/f9_release/android/app/src/main/java/com/frozt/engine/FroztActivity.java =====
2026-10-06T01:44:33.1559078Z package com.frozt.engine;
2026-10-06T01:44:33.1559423Z 
2026-10-06T01:44:33.1559882Z /** Thin shell marker; SDL's Activity integration owns the native lifecycle. */
2026-10-06T01:44:33.1561084Z public final class FroztActivity { private FroztActivity() {} }
2026-10-06T01:44:33.1622210Z ##[group]Run echo "===== host.c ====="
2026-10-06T01:44:33.1622901Z [36;1mecho "===== host.c ====="[0m
2026-10-06T01:44:33.1623605Z [36;1mcat n1_extracted/f9_release/native/src/host.c[0m
2026-10-06T01:44:33.1624313Z [36;1m[0m
2026-10-06T01:44:33.1624776Z [36;1mecho ""[0m
2026-10-06T01:44:33.1625308Z [36;1mecho "===== frozt_host.h ====="[0m
2026-10-06T01:44:33.1626098Z [36;1mcat n1_extracted/f9_release/native/include/frozt_host.h[0m
2026-10-06T01:44:33.1670692Z shell: /usr/bin/bash -e {0}
2026-10-06T01:44:33.1671392Z ##[endgroup]
2026-10-06T01:44:33.1734543Z ===== host.c =====
2026-10-06T01:44:33.1741594Z #include "frozt_host.h"
2026-10-06T01:44:33.1742332Z #include <stdio.h>
2026-10-06T01:44:33.1742839Z #include <stdlib.h>
2026-10-06T01:44:33.1743439Z #include <string.h>
2026-10-06T01:44:33.1743966Z #include <ctype.h>
2026-10-06T01:44:33.1744268Z 
2026-10-06T01:44:33.1744482Z struct FroztHost {
2026-10-06T01:44:33.1744995Z   FroztHostConfig cfg;
2026-10-06T01:44:33.1745573Z   int running, suspended;
2026-10-06T01:44:33.1746148Z   int width, height; double dpi;
2026-10-06T01:44:33.1746742Z   char* bundle_path;
2026-10-06T01:44:33.1747416Z   unsigned char* bundle_bytes; size_t bundle_len;
2026-10-06T01:44:33.1748159Z   FroztPackage* package;
2026-10-06T01:44:33.1748877Z   char package_id[256]; char game_version[64];
2026-10-06T01:44:33.1749912Z   char save_path[1024]; char save_game_version[64];
2026-10-06T01:44:33.1750633Z   char save_read_buffer[8192];
2026-10-06T01:44:33.1751374Z };
2026-10-06T01:44:33.1753012Z static void diag(FroztHost*h,const char*c,const char*m){if(h&&h->cfg.diagnostic)h->cfg.diagnostic(h,c,m,h->cfg.user);}
2026-10-06T01:44:33.1755173Z static int safe_component(const char*s){if(!s||!*s||strchr(s,'/')||strchr(s,'\\')||strstr(s,".."))return 0;for(const char*p=s;*p;p++)if(!(isalnum((unsigned char)*p)||*p=='.'||*p=='_'||*p=='-'))return 0;return 1;}
2026-10-06T01:44:33.1758786Z static int load_file(const char*path,unsigned char**out,size_t*len){FILE*f=fopen(path,"rb");if(!f)return 0;if(fseek(f,0,SEEK_END)){fclose(f);return 0;}long n=ftell(f);if(n<0){fclose(f);return 0;}rewind(f);unsigned char*b=(unsigned char*)malloc((size_t)n);if(!b){fclose(f);return 0;}if(n&&fread(b,1,(size_t)n,f)!=(size_t)n){free(b);fclose(f);return 0;}fclose(f);*out=b;*len=(size_t)n;return 1;}
2026-10-06T01:44:33.1762062Z static void hex(unsigned char out[2],unsigned char v){static const char*d="0123456789abcdef";out[0]=d[v>>4];out[1]=d[v&15];}
2026-10-06T01:44:33.1763662Z static int unhex(char c){if(c>='0'&&c<='9')return c-'0';if(c>='a'&&c<='f')return c-'a'+10;if(c>='A'&&c<='F')return c-'A'+10;return -1;}
2026-10-06T01:44:33.1765065Z static int save_key_ok(const char*k){if(!safe_component(k)||strlen(k)>128)return 0;return 1;}
2026-10-06T01:44:33.1766989Z static int ensure_save_path(FroztHost*h){if(!h->cfg.save_root||!safe_component(h->package_id))return 0;snprintf(h->save_path,sizeof h->save_path,"%s/%s.save",h->cfg.save_root,h->package_id);return 1;}
2026-10-06T01:44:33.1770291Z static int write_save(FroztHost*h,const char*text){char tmp[1060];snprintf(tmp,sizeof tmp,"%s.tmp",h->save_path);FILE*f=fopen(tmp,"wb");if(!f)return 0;size_t n=strlen(text);int ok=fwrite(text,1,n,f)==n && fflush(f)==0;fclose(f);if(!ok){remove(tmp);return 0;}remove(h->save_path);return rename(tmp,h->save_path)==0;}
2026-10-06T01:44:33.1775577Z static int save_matches(FroztHost*h,char**text){FILE*f=fopen(h->save_path,"rb");if(!f)return 0;if(fseek(f,0,SEEK_END)){fclose(f);return 0;}long n=ftell(f);if(n<0||n>1024*1024){fclose(f);return 0;}rewind(f);char*b=malloc((size_t)n+1);if(!b){fclose(f);return 0;}if(n&&fread(b,1,(size_t)n,f)!=(size_t)n){free(b);fclose(f);return 0;}b[n]=0;fclose(f);char header[512];snprintf(header,sizeof header,"FROZT-SAVE-1\nPACKAGE_ID=%s\nGAME_VERSION=%s\n",h->package_id,h->game_version);if(strncmp(b,header,strlen(header))!=0){free(b);return 0;}*text=b;return 1;}
2026-10-06T01:44:33.1779918Z FroztHost*frozt_host_create(const FroztHostConfig*c){if(!c)return NULL;FroztHost*h=calloc(1,sizeof*h);if(!h)return NULL;h->cfg=*c;h->dpi=1.0;return h;}
2026-10-06T01:44:33.1781933Z void frozt_host_destroy(FroztHost*h){if(!h)return;frozt_package_close(h->package);free(h->bundle_bytes);free(h->bundle_path);free(h);}
2026-10-06T01:44:33.1783405Z static int load_bundle_bytes(FroztHost*h,unsigned char*b,size_t n,const char*path){
2026-10-06T01:44:33.1784312Z   if(!h||!b||!n)return 0;
2026-10-06T01:44:33.1784853Z   char e[128]={0};
2026-10-06T01:44:33.1785495Z   FroztPackage*p=frozt_package_open_memory(b,n,e,sizeof e);
2026-10-06T01:44:33.1786439Z   if(!p){diag(h,"F7-BUNDLE-002",e[0]?e:"invalid game info");free(b);return 0;}
2026-10-06T01:44:33.1787268Z   FroztPackageInfo info;
2026-10-06T01:44:33.1788036Z   if(!frozt_package_info(p,&info)){frozt_package_close(p);free(b);return 0;}
2026-10-06T01:44:33.1789105Z   free(h->bundle_bytes); frozt_package_close(h->package); free(h->bundle_path);
2026-10-06T01:44:33.1790037Z   h->bundle_bytes=b; h->bundle_len=n; h->package=p;
2026-10-06T01:44:33.1790726Z   h->bundle_path=NULL;
2026-10-06T01:44:33.1791705Z   if(path){h->bundle_path=malloc(strlen(path)+1); if(h->bundle_path) strcpy(h->bundle_path,path);}
2026-10-06T01:44:33.1792884Z   snprintf(h->game_version,sizeof(h->game_version),"%s",info.game_version);
2026-10-06T01:44:33.1793717Z   return 1;
2026-10-06T01:44:33.1794176Z }
2026-10-06T01:44:33.1794737Z int frozt_host_load_bundle(FroztHost*h,const char*path){
2026-10-06T01:44:33.1795479Z   if(!h||!path||!*path)return 0;
2026-10-06T01:44:33.1796088Z   unsigned char*b=NULL;size_t n=0;
2026-10-06T01:44:33.1796988Z   if(!load_file(path,&b,&n)){diag(h,"F7-BUNDLE-001","game package could not be opened");return 0;}
2026-10-06T01:44:33.1797958Z   return load_bundle_bytes(h,b,n,path);
2026-10-06T01:44:33.1798557Z }
2026-10-06T01:44:33.1799277Z int frozt_host_load_bundle_memory(FroztHost*h,const unsigned char*bytes,size_t len){
2026-10-06T01:44:33.1800189Z   if(!h||!bytes||!len)return 0;
2026-10-06T01:44:33.1800800Z   unsigned char*b=malloc(len); if(!b)return 0;
2026-10-06T01:44:33.1801564Z   memcpy(b,bytes,len);
2026-10-06T01:44:33.1802114Z   return load_bundle_bytes(h,b,len,NULL);
2026-10-06T01:44:33.1802709Z }
2026-10-06T01:44:33.1805451Z int frozt_host_start(FroztHost*h,const char*package_id){if(!h||!package_id||!*package_id||!safe_component(package_id))return 0;if(h->package){FroztPackageInfo info;if(!frozt_package_info(h->package,&info)||strcmp(info.package_id,package_id)!=0){diag(h,"F7-PACKAGE-001","package id mismatch");return 0;}}snprintf(h->package_id,sizeof h->package_id,"%s",package_id);ensure_save_path(h);h->running=1;h->suspended=0;return 1;}
2026-10-06T01:44:33.1812710Z void frozt_host_stop(FroztHost*h){if(h)h->running=0;} void frozt_host_suspend(FroztHost*h){if(h&&h->running)h->suspended=1;} void frozt_host_resume(FroztHost*h){if(h&&h->running)h->suspended=0;} void frozt_host_tick(FroztHost*h,double dt){(void)h;(void)dt;} void frozt_host_resize(FroztHost*h,int w,int ht,double dpi){if(h){h->width=w;h->height=ht;h->dpi=dpi;}}
2026-10-06T01:44:33.1815473Z void frozt_host_input_json(FroztHost*h,const char*j){(void)h;(void)j;}
2026-10-06T01:44:33.1816772Z int frozt_host_package_info(FroztHost*h,FroztPackageInfo*out){return h&&h->package&&frozt_package_info(h->package,out);}
2026-10-06T01:44:33.1823207Z int frozt_host_save_put_json(FroztHost*h,const char*key,const char*json){if(!h||!json||!save_key_ok(key)||!ensure_save_path(h))return 0;char*old=NULL;save_matches(h,&old);size_t cap=(old?strlen(old):0)+strlen(key)*2+strlen(json)*2+1024;char*out=calloc(1,cap);if(!out){free(old);return 0;}char header[512];snprintf(header,sizeof header,"FROZT-SAVE-1\nPACKAGE_ID=%s\nGAME_VERSION=%s\n",h->package_id,h->game_version);strcat(out,header);int replaced=0; if(old){char*line=strtok(old,"\n");while(line){if(strncmp(line,"FROZT-SAVE-1",12)&&strncmp(line,"PACKAGE_ID=",11)&&strncmp(line,"GAME_VERSION=",13)){char*tab=strchr(line,'\t');if(tab){*tab=0;if(!strcmp(line,key)){strcat(out,key);strcat(out,"\t");for(const unsigned char*p=(const unsigned char*)json;*p;p++){unsigned char q[2];hex(q,*p);strncat(out,(char*)q,2);}strcat(out,"\n");replaced=1;}else{strcat(out,line);strcat(out,"\t");strcat(out,tab+1);strcat(out,"\n");}}}line=strtok(NULL,"\n");}}
2026-10-06T01:44:33.1830003Z if(!replaced){strcat(out,key);strcat(out,"\t");for(const unsigned char*p=(const unsigned char*)json;*p;p++){unsigned char q[2];hex(q,*p);strncat(out,(char*)q,2);}strcat(out,"\n");}int ok=write_save(h,out);free(old);free(out);return ok;}
2026-10-06T01:44:33.1835732Z const char*frozt_host_save_get_json(FroztHost*h,const char*key){if(!h||!save_key_ok(key)||!ensure_save_path(h))return NULL;char*old=NULL;if(!save_matches(h,&old))return NULL;h->save_read_buffer[0]=0;char*line=strtok(old,"\n");while(line){if(strncmp(line,"FROZT-SAVE-1",12)&&strncmp(line,"PACKAGE_ID=",11)&&strncmp(line,"GAME_VERSION=",13)){char*tab=strchr(line,'\t');if(tab){*tab=0;if(!strcmp(line,key)){const char*hexv=tab+1;size_t n=strlen(hexv);if(n%2||n/2>=sizeof h->save_read_buffer){free(old);return NULL;}for(size_t i=0;i<n;i+=2){int a=unhex(hexv[i]),b=unhex(hexv[i+1]);if(a<0||b<0){free(old);return NULL;}h->save_read_buffer[i/2]=(char)((a<<4)|b);}h->save_read_buffer[n/2]=0;free(old);return h->save_read_buffer;}}}line=strtok(NULL,"\n");}free(old);return NULL;}
2026-10-06T01:44:33.1844150Z int frozt_host_save_delete(FroztHost*h,const char*key){if(!h||!save_key_ok(key)||!ensure_save_path(h))return 0;char*old=NULL;if(!save_matches(h,&old))return 1;char header[512],*out=calloc(1,strlen(old)+512);if(!out){free(old);return 0;}snprintf(header,sizeof header,"FROZT-SAVE-1\nPACKAGE_ID=%s\nGAME_VERSION=%s\n",h->package_id,h->game_version);strcat(out,header);char*line=strtok(old,"\n");while(line){if(strncmp(line,"FROZT-SAVE-1",12)&&strncmp(line,"PACKAGE_ID=",11)&&strncmp(line,"GAME_VERSION=",13)){char*tab=strchr(line,'\t');if(tab){*tab=0;if(strcmp(line,key)){strcat(out,line);strcat(out,"\t");strcat(out,tab+1);strcat(out,"\n");}}}line=strtok(NULL,"\n");}int ok=write_save(h,out);free(old);free(out);return ok;}
2026-10-06T01:44:33.1848425Z 
2026-10-06T01:44:33.1848641Z ===== frozt_host.h =====
2026-10-06T01:44:33.1849168Z #ifndef FROZT_HOST_H
2026-10-06T01:44:33.1849667Z #define FROZT_HOST_H
2026-10-06T01:44:33.1850172Z #include <stdint.h>
2026-10-06T01:44:33.1850661Z #include <stddef.h>
2026-10-06T01:44:33.1851271Z #include "frozt_package.h"
2026-10-06T01:44:33.1851804Z #ifdef __cplusplus
2026-10-06T01:44:33.1852274Z extern "C" {
2026-10-06T01:44:33.1852712Z #endif
2026-10-06T01:44:33.1852952Z 
2026-10-06T01:44:33.1853191Z typedef struct FroztHost FroztHost;
2026-10-06T01:44:33.1854048Z typedef void (*FroztRenderFn)(FroztHost*, const char* json, size_t len, void* user);
2026-10-06T01:44:33.1855214Z typedef void (*FroztDiagFn)(FroztHost*, const char* code, const char* message, void* user);
2026-10-06T01:44:33.1855917Z 
2026-10-06T01:44:33.1856156Z typedef struct FroztHostConfig {
2026-10-06T01:44:33.1856740Z   const char* package_root;
2026-10-06T01:44:33.1857368Z   const char* save_root;
2026-10-06T01:44:33.1857872Z   uint64_t seed;
2026-10-06T01:44:33.1858355Z   FroztRenderFn render;
2026-10-06T01:44:33.1858885Z   FroztDiagFn diagnostic;
2026-10-06T01:44:33.1859401Z   void* user;
2026-10-06T01:44:33.1859867Z } FroztHostConfig;
2026-10-06T01:44:33.1860151Z 
2026-10-06T01:44:33.1860496Z FroztHost* frozt_host_create(const FroztHostConfig* config);
2026-10-06T01:44:33.1861379Z void frozt_host_destroy(FroztHost* host);
2026-10-06T01:44:33.1862129Z int frozt_host_start(FroztHost* host, const char* package_id);
2026-10-06T01:44:33.1862891Z void frozt_host_stop(FroztHost* host);
2026-10-06T01:44:33.1863527Z void frozt_host_suspend(FroztHost* host);
2026-10-06T01:44:33.1864174Z void frozt_host_resume(FroztHost* host);
2026-10-06T01:44:33.1864866Z void frozt_host_tick(FroztHost* host, double dt_ms);
2026-10-06T01:44:33.1865747Z void frozt_host_resize(FroztHost* host, int width, int height, double dpi);
2026-10-06T01:44:33.1866707Z void frozt_host_input_json(FroztHost* host, const char* json);
2026-10-06T01:44:33.1867611Z int frozt_host_load_bundle(FroztHost* host, const char* bundle_path);
2026-10-06T01:44:33.1868756Z int frozt_host_load_bundle_memory(FroztHost* host, const unsigned char* bytes, size_t len);
2026-10-06T01:44:33.1869891Z int frozt_host_save_put_json(FroztHost* host, const char* key, const char* json);
2026-10-06T01:44:33.1871036Z const char* frozt_host_save_get_json(FroztHost* host, const char* key);
2026-10-06T01:44:33.1871951Z int frozt_host_save_delete(FroztHost* host, const char* key);
2026-10-06T01:44:33.1872848Z int frozt_host_package_info(FroztHost* host, FroztPackageInfo* out);
2026-10-06T01:44:33.1873416Z 
2026-10-06T01:44:33.1873626Z #ifdef __cplusplus
2026-10-06T01:44:33.1874095Z }
2026-10-06T01:44:33.1874513Z #endif
2026-10-06T01:44:33.1874934Z #endif
2026-10-06T01:44:33.2866075Z ##[group]Run echo "===== quickjs_adapter.c ====="
2026-10-06T01:44:33.2866820Z [36;1mecho "===== quickjs_adapter.c ====="[0m
2026-10-06T01:44:33.2867614Z [36;1mcat n1_extracted/f9_release/native/src/quickjs_adapter.c[0m
2026-10-06T01:44:33.2913262Z shell: /usr/bin/bash -e {0}
2026-10-06T01:44:33.2913797Z ##[endgroup]
2026-10-06T01:44:33.3829902Z ===== quickjs_adapter.c =====
2026-10-06T01:44:33.3837441Z #include "frozt_host.h"
2026-10-06T01:44:33.3838308Z /* Optional QuickJS adapter. Build with -DFROZT_WITH_QUICKJS and provide the
2026-10-06T01:44:33.3839927Z    QuickJS headers/library in the native toolchain. The core host never assumes
2026-10-06T01:44:33.3841851Z    QuickJS is present, keeping Linux/macOS/Windows/Android/iOS shells reusable. */
2026-10-06T01:44:33.3842738Z #ifdef FROZT_WITH_QUICKJS
2026-10-06T01:44:33.3843265Z #include "quickjs.h"
2026-10-06T01:44:33.3843893Z int frozt_quickjs_available(void) { return 1; }
2026-10-06T01:44:33.3857437Z #else
2026-10-06T01:44:33.3858209Z int frozt_quickjs_available(void) { return 0; }
2026-10-06T01:44:33.3858845Z #endif
2026-10-06T01:44:33.4725206Z ##[group]Run echo "===== renderer.c ====="
2026-10-06T01:44:33.4725871Z [36;1mecho "===== renderer.c ====="[0m
2026-10-06T01:44:33.4726585Z [36;1mcat n1_extracted/f9_release/native/src/renderer.c[0m
2026-10-06T01:44:33.4727274Z [36;1m[0m
2026-10-06T01:44:33.4727711Z [36;1mecho ""[0m
2026-10-06T01:44:33.4728247Z [36;1mecho "===== frozt_renderer.h ====="[0m
2026-10-06T01:44:33.4729038Z [36;1mcat n1_extracted/f9_release/native/include/frozt_renderer.h[0m
2026-10-06T01:44:33.4775272Z shell: /usr/bin/bash -e {0}
2026-10-06T01:44:33.4775800Z ##[endgroup]
2026-10-06T01:44:33.5739240Z ===== renderer.c =====
2026-10-06T01:44:33.5746199Z #include "frozt_renderer.h"
2026-10-06T01:44:33.5746956Z #include <string.h>
2026-10-06T01:44:33.5747755Z struct FroztRenderTarget { int width, height; };
2026-10-06T01:44:33.5749406Z int frozt_renderer_begin(FroztRenderTarget* t,int w,int h){ if(!t||w<=0||h<=0)return 0; t->width=w;t->height=h;return 1; }
2026-10-06T01:44:33.5751562Z int frozt_renderer_draw_model(FroztRenderTarget* t,const char* json,FroztRenderStats* s){
2026-10-06T01:44:33.5753086Z   if(!t||!json||!s)return 0;
2026-10-06T01:44:33.5754321Z   /* Transport validation only. Real GPU drawing is supplied by the SDL platform adapter. */
2026-10-06T01:44:33.5755965Z   if(strstr(json,"\"version\":1") == NULL || strstr(json,"\"face\"") == NULL)return 0;
2026-10-06T01:44:33.5757602Z   s->sprites=0; s->face_elements=0; return 1;
2026-10-06T01:44:33.5758504Z }
2026-10-06T01:44:33.5759240Z void frozt_renderer_end(FroztRenderTarget* t){(void)t;}
2026-10-06T01:44:33.5759940Z 
2026-10-06T01:44:33.5760292Z ===== frozt_renderer.h =====
2026-10-06T01:44:33.5761284Z #ifndef FROZT_RENDERER_H
2026-10-06T01:44:33.5762122Z #define FROZT_RENDERER_H
2026-10-06T01:44:33.5762878Z #ifdef __cplusplus
2026-10-06T01:44:33.5763530Z extern "C" {
2026-10-06T01:44:33.5764162Z #endif
2026-10-06T01:44:33.5764444Z 
2026-10-06T01:44:33.5764736Z typedef struct FroztRenderTarget FroztRenderTarget;
2026-10-06T01:44:33.5765764Z typedef struct FroztRenderStats { unsigned sprites; unsigned face_elements; } FroztRenderStats;
2026-10-06T01:44:33.5766512Z 
2026-10-06T01:44:33.5766962Z /* Render-model consumer boundary. SDL/GLES/Vulkan/Skia implementations plug in
2026-10-06T01:44:33.5767905Z    here; the engine remains unaware of the graphics API. */
2026-10-06T01:44:33.5768805Z int frozt_renderer_begin(FroztRenderTarget* target, int width, int height);
2026-10-06T01:44:33.5769968Z int frozt_renderer_draw_model(FroztRenderTarget* target, const char* json, FroztRenderStats* stats);
2026-10-06T01:44:33.5771177Z void frozt_renderer_end(FroztRenderTarget* target);
2026-10-06T01:44:33.5771642Z 
2026-10-06T01:44:33.5771851Z #ifdef __cplusplus
2026-10-06T01:44:33.5772315Z }
2026-10-06T01:44:33.5772736Z #endif
2026-10-06T01:44:33.5773161Z #endif
2026-10-06T01:44:33.6934899Z ##[group]Run echo "===== sdl_adapter.c ====="
2026-10-06T01:44:33.6935896Z [36;1mecho "===== sdl_adapter.c ====="[0m
2026-10-06T01:44:33.6936953Z [36;1mcat n1_extracted/f9_release/native/src/sdl_adapter.c[0m
2026-10-06T01:44:33.6987259Z shell: /usr/bin/bash -e {0}
2026-10-06T01:44:33.6987795Z ##[endgroup]
2026-10-06T01:44:33.8153413Z ===== sdl_adapter.c =====
2026-10-06T01:44:33.8162240Z /* Optional SDL adapter. SDL2 and SDL3 are selected by the platform build.
2026-10-06T01:44:33.8163786Z    The adapter owns translation of SDL events into the Host API; game code never
2026-10-06T01:44:33.8165024Z    sees SDL types. */
2026-10-06T01:44:33.8165851Z #ifdef FROZT_WITH_SDL
2026-10-06T01:44:33.8166551Z #include <SDL.h>
2026-10-06T01:44:33.8167205Z #endif
2026-10-06T01:44:33.8167882Z int frozt_sdl_available(void) {
2026-10-06T01:44:33.8168666Z #ifdef FROZT_WITH_SDL
2026-10-06T01:44:33.8169199Z   return 1;
2026-10-06T01:44:33.8169615Z #else
2026-10-06T01:44:33.8170031Z   return 0;
2026-10-06T01:44:33.8170479Z #endif
2026-10-06T01:44:33.8171022Z }
2026-10-06T01:44:33.9441077Z ##[group]Run echo "===== package.c ====="
2026-10-06T01:44:33.9441754Z [36;1mecho "===== package.c ====="[0m
2026-10-06T01:44:33.9442449Z [36;1mcat n1_extracted/f9_release/native/src/package.c[0m
2026-10-06T01:44:33.9443146Z [36;1m[0m
2026-10-06T01:44:33.9443581Z [36;1mecho ""[0m
2026-10-06T01:44:33.9444093Z [36;1mecho "===== frozt_package.h ====="[0m
2026-10-06T01:44:33.9444882Z [36;1mcat n1_extracted/f9_release/native/include/frozt_package.h[0m
2026-10-06T01:44:33.9494251Z shell: /usr/bin/bash -e {0}
2026-10-06T01:44:33.9494782Z ##[endgroup]
2026-10-06T01:44:34.0737360Z ===== package.c =====
2026-10-06T01:44:34.0755496Z #include "frozt_package.h"
2026-10-06T01:44:34.0757493Z #include <stdlib.h>
2026-10-06T01:44:34.0759707Z #include <string.h>
2026-10-06T01:44:34.0760480Z #include <stdio.h>
2026-10-06T01:44:34.0762987Z #include <ctype.h>
2026-10-06T01:44:34.0763901Z 
2026-10-06T01:44:34.0766326Z struct Entry { char* path; size_t data_offset, size, usize; unsigned short method; };
2026-10-06T01:44:34.0768838Z struct FroztPackage { const unsigned char* bytes; size_t len; struct Entry* entries; size_t count; FroztPackageInfo info; };
2026-10-06T01:44:34.0771917Z static unsigned short u16(const unsigned char*b,size_t o){return (unsigned short)(b[o]|((unsigned short)b[o+1]<<8));}
2026-10-06T01:44:34.0775227Z static unsigned int u32(const unsigned char*b,size_t o){return (unsigned int)(b[o]|((unsigned int)b[o+1]<<8)|((unsigned int)b[o+2]<<16)|((unsigned int)b[o+3]<<24));}
2026-10-06T01:44:34.0777819Z static void err(char*e,size_t n,const char*m){if(e&&n){snprintf(e,n,"%s",m);}}
2026-10-06T01:44:34.0782945Z static int safe_path(const char*p){if(!p||!*p||p[0]=='/'||strchr(p,'\\'))return 0; if(isalpha((unsigned char)p[0])&&p[1]==':')return 0; const char*q=p; while(*q){const char*s=q; while(*q&&*q!='/')q++; size_t l=(size_t)(q-s); if(l==2&&s[0]=='.'&&s[1]=='.')return 0; if(*q)q++;} return 1;}
2026-10-06T01:44:34.0788504Z static int version3(const char*s,int*v){int a,b,c;char extra[2]={0};if(!s)return 0;if(sscanf(s,"%d.%d.%d%1s",&a,&b,&c,extra)!=3)return 0;if(a<0||b<0||c<0)return 0;v[0]=a;v[1]=b;v[2]=c;return 1;}
2026-10-06T01:44:34.0792076Z static int version_at_least(const char*runtime,const char*required){int a[3],b[3];if(!version3(runtime,a)||!version3(required,b))return 0;for(int i=0;i<3;i++){if(a[i]>b[i])return 1;if(a[i]<b[i])return 0;}return 1;}
2026-10-06T01:44:34.0804592Z static int parse_meta(FroztPackage*p,const unsigned char*d,size_t n,char*e,size_t en){char*text=(char*)malloc(n+1);if(!text)return 0;memcpy(text,d,n);text[n]=0;int seen[4]={0};char*line=text;while(line){char*next=strchr(line,'\n');if(next)*next++=0;while(*line&&(*line=='\r'||isspace((unsigned char)*line)))line++;if(*line&&*line!='#'){char*k=line;char*eq=strchr(k,'=');if(!eq){free(text);err(e,en,"invalid game info");return 0;}*eq++=0;while(*eq&&isspace((unsigned char)*eq))eq++;char*end=eq+strlen(eq);while(end>eq&&isspace((unsigned char)end[-1]))*--end=0;if(!strcmp(k,"game_name")){snprintf(p->info.game_name,sizeof p->info.game_name,"%s",eq);seen[0]=1;}else if(!strcmp(k,"game_version")){snprintf(p->info.game_version,sizeof p->info.game_version,"%s",eq);seen[1]=1;}else if(!strcmp(k,"frozt_version")){snprintf(p->info.frozt_version,sizeof p->info.frozt_version,"%s",eq);seen[2]=1;}else if(!strcmp(k,"package_id")){snprintf(p->info.package_id,sizeof p->info.package_id,"%s",eq);seen[3]=1;}}
2026-10-06T01:44:34.0817492Z  if(!next)break; line=next;}free(text);for(int i=0;i<4;i++)if(!seen[i]){err(e,en,"invalid game info");return 0;}if(!p->info.game_name[0]||!version3(p->info.game_version,(int[3]){0,0,0})||!version_at_least("0.9.0",p->info.frozt_version)||!safe_path(p->info.package_id)||!p->info.package_id[0]){err(e,en,"invalid game info");return 0;}return 1;}
2026-10-06T01:44:34.0825758Z static int find_entry(FroztPackage*p,const char*path){if(!safe_path(path))return -1;for(size_t i=0;i<p->count;i++)if(!strcmp(p->entries[i].path,path))return (int)i;return -1;}
2026-10-06T01:44:34.0850114Z FroztPackage* frozt_package_open_memory(const unsigned char*b,size_t len,char*error,size_t error_len){if(!b||len<22){err(error,error_len,"invalid .fzt container");return NULL;}size_t eocd=(size_t)-1;for(size_t i=len-22;i>0;i--){if(u32(b,i)==0x06054b50){eocd=i;break;}}if(eocd==(size_t)-1){err(error,error_len,"invalid .fzt container");return NULL;}unsigned short count=u16(b,eocd+10);unsigned int cds=u32(b,eocd+12),cdo=u32(b,eocd+16);if((size_t)cdo+(size_t)cds>len){err(error,error_len,"invalid .fzt container");return NULL;}FroztPackage*p=calloc(1,sizeof*p);if(!p)return NULL;p->bytes=b;p->len=len;p->entries=calloc(count,sizeof*p->entries);if(!p->entries){free(p);return NULL;}size_t off=cdo;for(unsigned short i=0;i<count;i++){if(off+46>len||u32(b,off)!=0x02014b50){err(error,error_len,"invalid .fzt container");frozt_package_close(p);return NULL;}unsigned short method=u16(b,off+10),nl=u16(b,off+28),xl=u16(b,off+30),cl=u16(b,off+32);if(off+46+(size_t)nl+xl+cl>len){err(error,error_len,"invalid .fzt container");frozt_package_close(p);return NULL;}char*name=malloc(nl+1);if(!name){frozt_package_close(p);return NULL;}memcpy(name,b+off+46,nl);name[nl]=0;if(name[nl-1]=='/'){free(name);off+=46+nl+xl+cl;continue;}if(!safe_path(name)){free(name);err(error,error_len,"invalid .fzt path");frozt_package_close(p);return NULL;}if(method!=0){free(name);err(error,error_len,"unsupported .fzt compression");frozt_package_close(p);return NULL;}size_t lo=u32(b,off+42);if(lo+30>len||u32(b,lo)!=0x04034b50){free(name);err(error,error_len,"invalid .fzt local header");frozt_package_close(p);return NULL;}unsigned short lnl=u16(b,lo+26),lxl=u16(b,lo+28);size_t data=lo+30+(size_t)lnl+lxl, size=u32(b,off+20), usize=u32(b,off+24);if(data+size>len){free(name);err(error,error_len,"invalid .fzt entry");frozt_package_close(p);return NULL;}p->entries[p->count++]=(struct Entry){name,data,size,usize,method};off+=46+nl+xl+cl;}
2026-10-06T01:44:34.0876415Z  int mi=find_entry(p,"metadata/meta.txt"), main=find_entry(p,"main.frozt"); if(mi<0||main<0||!parse_meta(p,p->bytes+p->entries[mi].data_offset,p->entries[mi].size,error,error_len)){if(mi<0||main<0)err(error,error_len,"invalid game info");frozt_package_close(p);return NULL;}return p;}
2026-10-06T01:44:34.0882628Z void frozt_package_close(FroztPackage*p){if(!p)return;for(size_t i=0;i<p->count;i++)free(p->entries[i].path);free(p->entries);free(p);}
2026-10-06T01:44:34.0885681Z int frozt_package_info(const FroztPackage*p,FroztPackageInfo*out){if(!p||!out)return 0;*out=p->info;return 1;}
2026-10-06T01:44:34.0889634Z const unsigned char* frozt_package_read(const FroztPackage*p,const char*path,size_t*out_len){if(!p)return NULL;int i=find_entry((FroztPackage*)p,path);if(i<0)return NULL;if(out_len)*out_len=p->entries[i].size;return p->bytes+p->entries[i].data_offset;}
2026-10-06T01:44:34.0894587Z int frozt_package_has(const FroztPackage*p,const char*path){return frozt_package_read(p,path,NULL)!=NULL;}
2026-10-06T01:44:34.0896115Z 
2026-10-06T01:44:34.0896347Z ===== frozt_package.h =====
2026-10-06T01:44:34.0896882Z #ifndef FROZT_PACKAGE_H
2026-10-06T01:44:34.0897423Z #define FROZT_PACKAGE_H
2026-10-06T01:44:34.0899561Z #include <stddef.h>
2026-10-06T01:44:34.0900655Z #ifdef __cplusplus
2026-10-06T01:44:34.0902633Z extern "C" {
2026-10-06T01:44:34.0904957Z #endif
2026-10-06T01:44:34.0906225Z 
2026-10-06T01:44:34.0907076Z typedef struct FroztPackage FroztPackage;
2026-10-06T01:44:34.0908296Z typedef struct FroztPackageInfo {
2026-10-06T01:44:34.0908862Z   char game_name[256];
2026-10-06T01:44:34.0910469Z   char game_version[64];
2026-10-06T01:44:34.0911230Z   char frozt_version[64];
2026-10-06T01:44:34.0913561Z   char package_id[129];
2026-10-06T01:44:34.0914252Z } FroztPackageInfo;
2026-10-06T01:44:34.0914529Z 
2026-10-06T01:44:34.0915674Z /* F7 package profile: ZIP is read in memory; release packaging uses Store (method 0).
2026-10-06T01:44:34.0917486Z    Deflate (method 8) remains a host decoder extension and never extracts to disk. */
2026-10-06T01:44:34.0919149Z FroztPackage* frozt_package_open_memory(const unsigned char* bytes, size_t len, char* error, size_t error_len);
2026-10-06T01:44:34.0922420Z void frozt_package_close(FroztPackage* package);
2026-10-06T01:44:34.0925744Z int frozt_package_info(const FroztPackage* package, FroztPackageInfo* out);
2026-10-06T01:44:34.0929409Z const unsigned char* frozt_package_read(const FroztPackage* package, const char* path, size_t* out_len);
2026-10-06T01:44:34.0930553Z int frozt_package_has(const FroztPackage* package, const char* path);
2026-10-06T01:44:34.0931215Z 
2026-10-06T01:44:34.0931420Z #ifdef __cplusplus
2026-10-06T01:44:34.0933164Z }
2026-10-06T01:44:34.0933566Z #endif
2026-10-06T01:44:34.0933977Z #endif
2026-10-06T01:44:34.1890829Z ##[group]Run echo "===== Android assets ====="
2026-10-06T01:44:34.1891720Z [36;1mecho "===== Android assets ====="[0m
2026-10-06T01:44:34.1892293Z [36;1m[0m
2026-10-06T01:44:34.1892927Z [36;1mif [ -d "n1_extracted/f9_release/android/app/src/main/assets" ]; then[0m
2026-10-06T01:44:34.1893851Z [36;1m  find n1_extracted/f9_release/android/app/src/main/assets \[0m
2026-10-06T01:44:34.1894568Z [36;1m    -type f \[0m
2026-10-06T01:44:34.1895090Z [36;1m    -printf "%p (%s bytes)\n"[0m
2026-10-06T01:44:34.1895639Z [36;1melse[0m
2026-10-06T01:44:34.1896159Z [36;1m  echo "NO ANDROID ASSETS DIRECTORY FOUND"[0m
2026-10-06T01:44:34.1896890Z [36;1mfi[0m
2026-10-06T01:44:34.1897317Z [36;1m[0m
2026-10-06T01:44:34.1897740Z [36;1mecho ""[0m
2026-10-06T01:44:34.1898259Z [36;1mecho "===== F9 PACKAGE LOCATIONS ====="[0m
2026-10-06T01:44:34.1898860Z [36;1m[0m
2026-10-06T01:44:34.1899324Z [36;1mfind n1_extracted/f9_release \[0m
2026-10-06T01:44:34.1899909Z [36;1m  -type f \[0m
2026-10-06T01:44:34.1900390Z [36;1m  -name "*.fzt" \[0m
2026-10-06T01:44:34.1900998Z [36;1m  -printf "%p (%s bytes)\n" \[0m
2026-10-06T01:44:34.1901541Z [36;1m  | sort[0m
2026-10-06T01:44:34.1954464Z shell: /usr/bin/bash -e {0}
2026-10-06T01:44:34.1954985Z ##[endgroup]
2026-10-06T01:44:34.2345678Z ===== Android assets =====
2026-10-06T01:44:34.2356064Z n1_extracted/f9_release/android/app/src/main/assets/game.fzt (760 bytes)
2026-10-06T01:44:34.2356858Z 
2026-10-06T01:44:34.2357218Z ===== F9 PACKAGE LOCATIONS =====
2026-10-06T01:44:34.2377281Z n1_extracted/f9_release/android/app/src/main/assets/game.fzt (760 bytes)
2026-10-06T01:44:34.2378591Z n1_extracted/f9_release/fixtures_f7.fzt (475 bytes)
2026-10-06T01:44:34.2379402Z n1_extracted/f9_release/fixtures_f8_sample.fzt (590 bytes)
2026-10-06T01:44:34.2380585Z n1_extracted/f9_release/fixtures_f9_runner.fzt (760 bytes)
2026-10-06T01:44:34.2538484Z ##[group]Run echo "===== Runtime initialization references ====="
2026-10-06T01:44:34.2539325Z [36;1mecho "===== Runtime initialization references ====="[0m
2026-10-06T01:44:34.2539990Z [36;1m[0m
2026-10-06T01:44:34.2540424Z [36;1mgrep -RniE \[0m
2026-10-06T01:44:34.2541512Z [36;1m  "quickjs|JS_NewRuntime|JS_NewContext|JS_Eval|runtime|tick|render|start|resume|surface|AAsset|AssetManager|asset|input" \[0m
2026-10-06T01:44:34.2542632Z [36;1m  n1_extracted/f9_release/android \[0m
2026-10-06T01:44:34.2543275Z [36;1m  n1_extracted/f9_release/native \[0m
2026-10-06T01:44:34.2543884Z [36;1m  --include="*.c" \[0m
2026-10-06T01:44:34.2544425Z [36;1m  --include="*.cpp" \[0m
2026-10-06T01:44:34.2544976Z [36;1m  --include="*.h" \[0m
2026-10-06T01:44:34.2545512Z [36;1m  --include="*.java" \[0m
2026-10-06T01:44:34.2546053Z [36;1m  --include="*.kt" \[0m
2026-10-06T01:44:34.2546583Z [36;1m  | head -n 500 || true[0m
2026-10-06T01:44:34.2596467Z shell: /usr/bin/bash -e {0}
2026-10-06T01:44:34.2597009Z ##[endgroup]
2026-10-06T01:44:34.2851810Z ===== Runtime initialization references =====
2026-10-06T01:44:34.2866326Z n1_extracted/f9_release/android/app/src/main/cpp/frozt_android_jni.c:2:#include <android/asset_manager.h>
2026-10-06T01:44:34.2868629Z n1_extracted/f9_release/android/app/src/main/cpp/frozt_android_jni.c:3:#include <android/asset_manager_jni.h>
2026-10-06T01:44:34.2871443Z n1_extracted/f9_release/android/app/src/main/cpp/frozt_android_jni.c:12:JNIEXPORT void JNICALL Java_com_frozt_runner_FroztRunnerView_nativeStart(JNIEnv* env,jobject thiz,jint w,jint h,jfloat dpi){
2026-10-06T01:44:34.2873865Z n1_extracted/f9_release/android/app/src/main/cpp/frozt_android_jni.c:13: (void)thiz; ensure_host(); AAssetManager* am=NULL; jclass cls=(*env)->GetObjectClass(env,thiz); (void)cls;
2026-10-06T01:44:34.2876207Z n1_extracted/f9_release/android/app/src/main/cpp/frozt_android_jni.c:14: /* Asset loading is intentionally isolated here; a production shell supplies the manager via its Activity. */
2026-10-06T01:44:34.2878341Z n1_extracted/f9_release/android/app/src/main/cpp/frozt_android_jni.c:15: frozt_host_resize(g_host,w,h,dpi); frozt_host_start(g_host,"frozt.runner");
2026-10-06T01:44:34.2881559Z n1_extracted/f9_release/android/app/src/main/cpp/frozt_android_jni.c:18:JNIEXPORT void JNICALL Java_com_frozt_runner_FroztRunnerView_nativeInput(JNIEnv* e,jobject o,jint a,jfloat x,jfloat y,jint p){(void)e;(void)o;(void)x;(void)y;(void)p;if(g_host){char b[128];snprintf(b,sizeof b,"{\"action\":%d}",a);frozt_host_input_json(g_host,b);}}
2026-10-06T01:44:34.2885003Z n1_extracted/f9_release/android/app/src/main/cpp/frozt_android_jni.c:20:JNIEXPORT void JNICALL Java_com_frozt_runner_FroztRunnerView_nativeResume(JNIEnv* e,jobject o){(void)e;(void)o;if(g_host)frozt_host_resume(g_host);}
2026-10-06T01:44:34.2887422Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java:5:import android.view.SurfaceHolder;
2026-10-06T01:44:34.2889171Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java:6:import android.view.SurfaceView;
2026-10-06T01:44:34.2891407Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java:8:/** Thin Android lifecycle/input shell. Rendering and simulation stay behind the native host. */
2026-10-06T01:44:34.2893858Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java:9:final class FroztRunnerView extends SurfaceView implements SurfaceHolder.Callback {
2026-10-06T01:44:34.2896098Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java:17:        nativeInput(action, e.getX(), e.getY(), e.getActionMasked());
2026-10-06T01:44:34.2898863Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java:20:    @Override public void surfaceCreated(SurfaceHolder h) { lastNs=System.nanoTime(); nativeStart(getWidth(),getHeight(),getResources().getDisplayMetrics().density); }
2026-10-06T01:44:34.2902348Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java:21:    @Override public void surfaceChanged(SurfaceHolder h,int f,int w,int ht) { nativeResize(w,ht,getResources().getDisplayMetrics().density); }
2026-10-06T01:44:34.2904989Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java:22:    @Override public void surfaceDestroyed(SurfaceHolder h) { nativeStop(); }
2026-10-06T01:44:34.2906989Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java:24:    void resume(){ nativeResume(); }
2026-10-06T01:44:34.2908866Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java:25:    private native void nativeStart(int w,int h,float dpi);
2026-10-06T01:44:34.2911141Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java:27:    private native void nativeInput(int action,float x,float y,int phase);
2026-10-06T01:44:34.2913571Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java:28:    private native void nativeSuspend(); private native void nativeResume(); private native void nativeStop();
2026-10-06T01:44:34.2916083Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/MainActivity.java:19:    @Override protected void onResume() { super.onResume(); if (view != null) view.resume(); }
2026-10-06T01:44:34.2918166Z n1_extracted/f9_release/native/include/frozt_host.h:11:typedef void (*FroztRenderFn)(FroztHost*, const char* json, size_t len, void* user);
2026-10-06T01:44:34.2919612Z n1_extracted/f9_release/native/include/frozt_host.h:18:  FroztRenderFn render;
2026-10-06T01:44:34.2921042Z n1_extracted/f9_release/native/include/frozt_host.h:25:int frozt_host_start(FroztHost* host, const char* package_id);
2026-10-06T01:44:34.2923146Z n1_extracted/f9_release/native/include/frozt_host.h:28:void frozt_host_resume(FroztHost* host);
2026-10-06T01:44:34.2924514Z n1_extracted/f9_release/native/include/frozt_host.h:29:void frozt_host_tick(FroztHost* host, double dt_ms);
2026-10-06T01:44:34.2925973Z n1_extracted/f9_release/native/include/frozt_host.h:31:void frozt_host_input_json(FroztHost* host, const char* json);
2026-10-06T01:44:34.2927295Z n1_extracted/f9_release/native/include/frozt_renderer.h:1:#ifndef FROZT_RENDERER_H
2026-10-06T01:44:34.2928417Z n1_extracted/f9_release/native/include/frozt_renderer.h:2:#define FROZT_RENDERER_H
2026-10-06T01:44:34.2929712Z n1_extracted/f9_release/native/include/frozt_renderer.h:7:typedef struct FroztRenderTarget FroztRenderTarget;
2026-10-06T01:44:34.2931672Z n1_extracted/f9_release/native/include/frozt_renderer.h:8:typedef struct FroztRenderStats { unsigned sprites; unsigned face_elements; } FroztRenderStats;
2026-10-06T01:44:34.2933712Z n1_extracted/f9_release/native/include/frozt_renderer.h:10:/* Render-model consumer boundary. SDL/GLES/Vulkan/Skia implementations plug in
2026-10-06T01:44:34.2935846Z n1_extracted/f9_release/native/include/frozt_renderer.h:12:int frozt_renderer_begin(FroztRenderTarget* target, int width, int height);
2026-10-06T01:44:34.2938254Z n1_extracted/f9_release/native/include/frozt_renderer.h:13:int frozt_renderer_draw_model(FroztRenderTarget* target, const char* json, FroztRenderStats* stats);
2026-10-06T01:44:34.2940516Z n1_extracted/f9_release/native/include/frozt_renderer.h:14:void frozt_renderer_end(FroztRenderTarget* target);
2026-10-06T01:44:34.2945114Z n1_extracted/f9_release/native/src/host.c:55:int frozt_host_start(FroztHost*h,const char*package_id){if(!h||!package_id||!*package_id||!safe_component(package_id))return 0;if(h->package){FroztPackageInfo info;if(!frozt_package_info(h->package,&info)||strcmp(info.package_id,package_id)!=0){diag(h,"F7-PACKAGE-001","package id mismatch");return 0;}}snprintf(h->package_id,sizeof h->package_id,"%s",package_id);ensure_save_path(h);h->running=1;h->suspended=0;return 1;}
2026-10-06T01:44:34.2951207Z n1_extracted/f9_release/native/src/host.c:56:void frozt_host_stop(FroztHost*h){if(h)h->running=0;} void frozt_host_suspend(FroztHost*h){if(h&&h->running)h->suspended=1;} void frozt_host_resume(FroztHost*h){if(h&&h->running)h->suspended=0;} void frozt_host_tick(FroztHost*h,double dt){(void)h;(void)dt;} void frozt_host_resize(FroztHost*h,int w,int ht,double dpi){if(h){h->width=w;h->height=ht;h->dpi=dpi;}}
2026-10-06T01:44:34.2954263Z n1_extracted/f9_release/native/src/host.c:57:void frozt_host_input_json(FroztHost*h,const char*j){(void)h;(void)j;}
2026-10-06T01:44:34.2956538Z n1_extracted/f9_release/native/src/package.c:14:static int version_at_least(const char*runtime,const char*required){int a[3],b[3];if(!version3(runtime,a)||!version3(required,b))return 0;for(int i=0;i<3;i++){if(a[i]>b[i])return 1;if(a[i]<b[i])return 0;}return 1;}
2026-10-06T01:44:34.2958902Z n1_extracted/f9_release/native/src/quickjs_adapter.c:2:/* Optional QuickJS adapter. Build with -DFROZT_WITH_QUICKJS and provide the
2026-10-06T01:44:34.2960615Z n1_extracted/f9_release/native/src/quickjs_adapter.c:3:   QuickJS headers/library in the native toolchain. The core host never assumes
2026-10-06T01:44:34.2962405Z n1_extracted/f9_release/native/src/quickjs_adapter.c:4:   QuickJS is present, keeping Linux/macOS/Windows/Android/iOS shells reusable. */
2026-10-06T01:44:34.2963804Z n1_extracted/f9_release/native/src/quickjs_adapter.c:5:#ifdef FROZT_WITH_QUICKJS
2026-10-06T01:44:34.2964859Z n1_extracted/f9_release/native/src/quickjs_adapter.c:6:#include "quickjs.h"
2026-10-06T01:44:34.2966051Z n1_extracted/f9_release/native/src/quickjs_adapter.c:7:int frozt_quickjs_available(void) { return 1; }
2026-10-06T01:44:34.2967411Z n1_extracted/f9_release/native/src/quickjs_adapter.c:9:int frozt_quickjs_available(void) { return 0; }
2026-10-06T01:44:34.2969035Z n1_extracted/f9_release/native/src/host_smoke.c:5:static void render(FroztHost* h,const char*json,size_t n,void*u){(void)h;(void)json;(void)n;(void)u;}
2026-10-06T01:44:34.2975583Z n1_extracted/f9_release/native/src/host_smoke.c:7:int main(int argc,char**argv){FroztHostConfig c={0};c.render=render;c.diagnostic=diag;c.seed=1;c.save_root=argc>2?argv[2]:NULL;FroztHost*h=frozt_host_create(&c);if(!h)return 2;if(argc>1){if(!frozt_host_load_bundle(h,argv[1])){frozt_host_destroy(h);return 3;}FroztPackageInfo info;if(!frozt_host_package_info(h,&info)){frozt_host_destroy(h);return 4;}if(!frozt_host_start(h,info.package_id)){frozt_host_destroy(h);return 5;}if(c.save_root){if(!frozt_host_save_put_json(h,"smoke","42")){frozt_host_destroy(h);return 6;}const char*v=frozt_host_save_get_json(h,"smoke");if(!v||strcmp(v,"42")){frozt_host_destroy(h);return 7;}}}else if(!frozt_host_start(h,"f6.smoke")){frozt_host_destroy(h);return 8;}frozt_host_resize(h,1280,720,1.0);frozt_host_tick(h,16.6666667);frozt_host_suspend(h);frozt_host_resume(h);frozt_host_stop(h);frozt_host_destroy(h);puts("F7 native host smoke: PASS");return 0;}
2026-10-06T01:44:34.2981541Z n1_extracted/f9_release/native/src/renderer.c:1:#include "frozt_renderer.h"
2026-10-06T01:44:34.2982704Z n1_extracted/f9_release/native/src/renderer.c:3:struct FroztRenderTarget { int width, height; };
2026-10-06T01:44:34.2984388Z n1_extracted/f9_release/native/src/renderer.c:4:int frozt_renderer_begin(FroztRenderTarget* t,int w,int h){ if(!t||w<=0||h<=0)return 0; t->width=w;t->height=h;return 1; }
2026-10-06T01:44:34.2986312Z n1_extracted/f9_release/native/src/renderer.c:5:int frozt_renderer_draw_model(FroztRenderTarget* t,const char* json,FroztRenderStats* s){
2026-10-06T01:44:34.2987901Z n1_extracted/f9_release/native/src/renderer.c:11:void frozt_renderer_end(FroztRenderTarget* t){(void)t;}
2026-10-06T01:44:34.3145113Z ##[group]Run echo "===== Renderer implementation references ====="
2026-10-06T01:44:34.3145994Z [36;1mecho "===== Renderer implementation references ====="[0m
2026-10-06T01:44:34.3146693Z [36;1m[0m
2026-10-06T01:44:34.3147163Z [36;1mgrep -RniE \[0m
2026-10-06T01:44:34.3148004Z [36;1m  "SDL_Render|glClear|glDraw|GLES|OpenGL|Vulkan|Skia|Surface|ANativeWindow|EGL|render\(" \[0m
2026-10-06T01:44:34.3148979Z [36;1m  n1_extracted/f9_release/android \[0m
2026-10-06T01:44:34.3149648Z [36;1m  n1_extracted/f9_release/native \[0m
2026-10-06T01:44:34.3150279Z [36;1m  --include="*.c" \[0m
2026-10-06T01:44:34.3150836Z [36;1m  --include="*.cpp" \[0m
2026-10-06T01:44:34.3151549Z [36;1m  --include="*.h" \[0m
2026-10-06T01:44:34.3152100Z [36;1m  --include="*.java" \[0m
2026-10-06T01:44:34.3152661Z [36;1m  --include="*.kt" \[0m
2026-10-06T01:44:34.3153212Z [36;1m  | head -n 500 || true[0m
2026-10-06T01:44:34.3204352Z shell: /usr/bin/bash -e {0}
2026-10-06T01:44:34.3204950Z ##[endgroup]
2026-10-06T01:44:34.3396459Z ===== Renderer implementation references =====
2026-10-06T01:44:34.3416276Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java:5:import android.view.SurfaceHolder;
2026-10-06T01:44:34.3417136Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java:6:import android.view.SurfaceView;
2026-10-06T01:44:34.3418244Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java:9:final class FroztRunnerView extends SurfaceView implements SurfaceHolder.Callback {
2026-10-06T01:44:34.3419841Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java:20:    @Override public void surfaceCreated(SurfaceHolder h) { lastNs=System.nanoTime(); nativeStart(getWidth(),getHeight(),getResources().getDisplayMetrics().density); }
2026-10-06T01:44:34.3421405Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java:21:    @Override public void surfaceChanged(SurfaceHolder h,int f,int w,int ht) { nativeResize(w,ht,getResources().getDisplayMetrics().density); }
2026-10-06T01:44:34.3422538Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java:22:    @Override public void surfaceDestroyed(SurfaceHolder h) { nativeStop(); }
2026-10-06T01:44:34.3423631Z n1_extracted/f9_release/native/include/frozt_renderer.h:10:/* Render-model consumer boundary. SDL/GLES/Vulkan/Skia implementations plug in
2026-10-06T01:44:34.3424551Z n1_extracted/f9_release/native/src/host_smoke.c:5:static void render(FroztHost* h,const char*json,size_t n,void*u){(void)h;(void)json;(void)n;(void)u;}
2026-10-06T01:44:34.3697574Z ##[group]Run echo "===== Package loading references ====="
2026-10-06T01:44:34.3698112Z [36;1mecho "===== Package loading references ====="[0m
2026-10-06T01:44:34.3698541Z [36;1m[0m
2026-10-06T01:44:34.3698910Z [36;1mgrep -RniE \[0m
2026-10-06T01:44:34.3699419Z [36;1m  "fixtures_f9_runner|f9_runner|readPackageFile|load|package|main.frozt|game.fzt|AAsset" \[0m
2026-10-06T01:44:34.3699959Z [36;1m  n1_extracted/f9_release/android \[0m
2026-10-06T01:44:34.3700404Z [36;1m  n1_extracted/f9_release/native \[0m
2026-10-06T01:44:34.3700827Z [36;1m  --include="*.c" \[0m
2026-10-06T01:44:34.3701515Z [36;1m  --include="*.cpp" \[0m
2026-10-06T01:44:34.3701921Z [36;1m  --include="*.h" \[0m
2026-10-06T01:44:34.3702324Z [36;1m  --include="*.java" \[0m
2026-10-06T01:44:34.3702732Z [36;1m  --include="*.kt" \[0m
2026-10-06T01:44:34.3703141Z [36;1m  | head -n 500 || true[0m
2026-10-06T01:44:34.3759707Z shell: /usr/bin/bash -e {0}
2026-10-06T01:44:34.3760110Z ##[endgroup]
2026-10-06T01:44:34.3847888Z ===== Package loading references =====
2026-10-06T01:44:34.3864274Z n1_extracted/f9_release/android/app/src/main/cpp/frozt_android_jni.c:10:JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void* reserved){(void)reserved;g_vm=vm;return JNI_VERSION_1_6;}
2026-10-06T01:44:34.3865821Z n1_extracted/f9_release/android/app/src/main/cpp/frozt_android_jni.c:13: (void)thiz; ensure_host(); AAssetManager* am=NULL; jclass cls=(*env)->GetObjectClass(env,thiz); (void)cls;
2026-10-06T01:44:34.3867072Z n1_extracted/f9_release/android/app/src/main/cpp/frozt_android_jni.c:14: /* Asset loading is intentionally isolated here; a production shell supplies the manager via its Activity. */
2026-10-06T01:44:34.3867955Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java:1:package com.frozt.runner;
2026-10-06T01:44:34.3869238Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/FroztRunnerView.java:10:    static { System.loadLibrary("frozt_android"); }
2026-10-06T01:44:34.3870201Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/runner/MainActivity.java:1:package com.frozt.runner;
2026-10-06T01:44:34.3871059Z n1_extracted/f9_release/android/app/src/main/java/com/frozt/engine/FroztActivity.java:1:package com.frozt.engine;
2026-10-06T01:44:34.3871726Z n1_extracted/f9_release/native/include/frozt_package.h:1:#ifndef FROZT_PACKAGE_H
2026-10-06T01:44:34.3872379Z n1_extracted/f9_release/native/include/frozt_package.h:2:#define FROZT_PACKAGE_H
2026-10-06T01:44:34.3873341Z n1_extracted/f9_release/native/include/frozt_package.h:8:typedef struct FroztPackage FroztPackage;
2026-10-06T01:44:34.3874106Z n1_extracted/f9_release/native/include/frozt_package.h:9:typedef struct FroztPackageInfo {
2026-10-06T01:44:34.3874721Z n1_extracted/f9_release/native/include/frozt_package.h:13:  char package_id[129];
2026-10-06T01:44:34.3875347Z n1_extracted/f9_release/native/include/frozt_package.h:14:} FroztPackageInfo;
2026-10-06T01:44:34.3876071Z n1_extracted/f9_release/native/include/frozt_package.h:16:/* F7 package profile: ZIP is read in memory; release packaging uses Store (method 0).
2026-10-06T01:44:34.3877302Z n1_extracted/f9_release/native/include/frozt_package.h:18:FroztPackage* frozt_package_open_memory(const unsigned char* bytes, size_t len, char* error, size_t error_len);
2026-10-06T01:44:34.3878507Z n1_extracted/f9_release/native/include/frozt_package.h:19:void frozt_package_close(FroztPackage* package);
2026-10-06T01:44:34.3879246Z n1_extracted/f9_release/native/include/frozt_package.h:20:int frozt_package_info(const FroztPackage* package, FroztPackageInfo* out);
2026-10-06T01:44:34.3880098Z n1_extracted/f9_release/native/include/frozt_package.h:21:const unsigned char* frozt_package_read(const FroztPackage* package, const char* path, size_t* out_len);
2026-10-06T01:44:34.3881050Z n1_extracted/f9_release/native/include/frozt_package.h:22:int frozt_package_has(const FroztPackage* package, const char* path);
2026-10-06T01:44:34.3881864Z n1_extracted/f9_release/native/include/frozt_host.h:5:#include "frozt_package.h"
2026-10-06T01:44:34.3882455Z n1_extracted/f9_release/native/include/frozt_host.h:15:  const char* package_root;
2026-10-06T01:44:34.3883109Z n1_extracted/f9_release/native/include/frozt_host.h:25:int frozt_host_start(FroztHost* host, const char* package_id);
2026-10-06T01:44:34.3883833Z n1_extracted/f9_release/native/include/frozt_host.h:32:int frozt_host_load_bundle(FroztHost* host, const char* bundle_path);
2026-10-06T01:44:34.3884610Z n1_extracted/f9_release/native/include/frozt_host.h:33:int frozt_host_load_bundle_memory(FroztHost* host, const unsigned char* bytes, size_t len);
2026-10-06T01:44:34.3885488Z n1_extracted/f9_release/native/include/frozt_host.h:37:int frozt_host_package_info(FroztHost* host, FroztPackageInfo* out);
2026-10-06T01:44:34.3886129Z n1_extracted/f9_release/native/src/host.c:13:  FroztPackage* package;
2026-10-06T01:44:34.3886721Z n1_extracted/f9_release/native/src/host.c:14:  char package_id[256]; char game_version[64];
2026-10-06T01:44:34.3887995Z n1_extracted/f9_release/native/src/host.c:20:static int load_file(const char*path,unsigned char**out,size_t*len){FILE*f=fopen(path,"rb");if(!f)return 0;if(fseek(f,0,SEEK_END)){fclose(f);return 0;}long n=ftell(f);if(n<0){fclose(f);return 0;}rewind(f);unsigned char*b=(unsigned char*)malloc((size_t)n);if(!b){fclose(f);return 0;}if(n&&fread(b,1,(size_t)n,f)!=(size_t)n){free(b);fclose(f);return 0;}fclose(f);*out=b;*len=(size_t)n;return 1;}
2026-10-06T01:44:34.3889513Z n1_extracted/f9_release/native/src/host.c:24:static int ensure_save_path(FroztHost*h){if(!h->cfg.save_root||!safe_component(h->package_id))return 0;snprintf(h->save_path,sizeof h->save_path,"%s/%s.save",h->cfg.save_root,h->package_id);return 1;}
2026-10-06T01:44:34.3891473Z n1_extracted/f9_release/native/src/host.c:26:static int save_matches(FroztHost*h,char**text){FILE*f=fopen(h->save_path,"rb");if(!f)return 0;if(fseek(f,0,SEEK_END)){fclose(f);return 0;}long n=ftell(f);if(n<0||n>1024*1024){fclose(f);return 0;}rewind(f);char*b=malloc((size_t)n+1);if(!b){fclose(f);return 0;}if(n&&fread(b,1,(size_t)n,f)!=(size_t)n){free(b);fclose(f);return 0;}b[n]=0;fclose(f);char header[512];snprintf(header,sizeof header,"FROZT-SAVE-1\nPACKAGE_ID=%s\nGAME_VERSION=%s\n",h->package_id,h->game_version);if(strncmp(b,header,strlen(header))!=0){free(b);return 0;}*text=b;return 1;}
2026-10-06T01:44:34.3893121Z n1_extracted/f9_release/native/src/host.c:28:void frozt_host_destroy(FroztHost*h){if(!h)return;frozt_package_close(h->package);free(h->bundle_bytes);free(h->bundle_path);free(h);}
2026-10-06T01:44:34.3893962Z n1_extracted/f9_release/native/src/host.c:29:static int load_bundle_bytes(FroztHost*h,unsigned char*b,size_t n,const char*path){
2026-10-06T01:44:34.3894672Z n1_extracted/f9_release/native/src/host.c:32:  FroztPackage*p=frozt_package_open_memory(b,n,e,sizeof e);
2026-10-06T01:44:34.3895265Z n1_extracted/f9_release/native/src/host.c:34:  FroztPackageInfo info;
2026-10-06T01:44:34.3895901Z n1_extracted/f9_release/native/src/host.c:35:  if(!frozt_package_info(p,&info)){frozt_package_close(p);free(b);return 0;}
2026-10-06T01:44:34.3896611Z n1_extracted/f9_release/native/src/host.c:36:  free(h->bundle_bytes); frozt_package_close(h->package); free(h->bundle_path);
2026-10-06T01:44:34.3897284Z n1_extracted/f9_release/native/src/host.c:37:  h->bundle_bytes=b; h->bundle_len=n; h->package=p;
2026-10-06T01:44:34.3897920Z n1_extracted/f9_release/native/src/host.c:43:int frozt_host_load_bundle(FroztHost*h,const char*path){
2026-10-06T01:44:34.3898637Z n1_extracted/f9_release/native/src/host.c:46:  if(!load_file(path,&b,&n)){diag(h,"F7-BUNDLE-001","game package could not be opened");return 0;}
2026-10-06T01:44:34.3899327Z n1_extracted/f9_release/native/src/host.c:47:  return load_bundle_bytes(h,b,n,path);
2026-10-06T01:44:34.3899997Z n1_extracted/f9_release/native/src/host.c:49:int frozt_host_load_bundle_memory(FroztHost*h,const unsigned char*bytes,size_t len){
2026-10-06T01:44:34.3900666Z n1_extracted/f9_release/native/src/host.c:53:  return load_bundle_bytes(h,b,len,NULL);
2026-10-06T01:44:34.3902371Z n1_extracted/f9_release/native/src/host.c:55:int frozt_host_start(FroztHost*h,const char*package_id){if(!h||!package_id||!*package_id||!safe_component(package_id))return 0;if(h->package){FroztPackageInfo info;if(!frozt_package_info(h->package,&info)||strcmp(info.package_id,package_id)!=0){diag(h,"F7-PACKAGE-001","package id mismatch");return 0;}}snprintf(h->package_id,sizeof h->package_id,"%s",package_id);ensure_save_path(h);h->running=1;h->suspended=0;return 1;}
2026-10-06T01:44:34.3903815Z n1_extracted/f9_release/native/src/host.c:58:int frozt_host_package_info(FroztHost*h,FroztPackageInfo*out){return h&&h->package&&frozt_package_info(h->package,out);}
2026-10-06T01:44:34.3906342Z n1_extracted/f9_release/native/src/host.c:59:int frozt_host_save_put_json(FroztHost*h,const char*key,const char*json){if(!h||!json||!save_key_ok(key)||!ensure_save_path(h))return 0;char*old=NULL;save_matches(h,&old);size_t cap=(old?strlen(old):0)+strlen(key)*2+strlen(json)*2+1024;char*out=calloc(1,cap);if(!out){free(old);return 0;}char header[512];snprintf(header,sizeof header,"FROZT-SAVE-1\nPACKAGE_ID=%s\nGAME_VERSION=%s\n",h->package_id,h->game_version);strcat(out,header);int replaced=0; if(old){char*line=strtok(old,"\n");while(line){if(strncmp(line,"FROZT-SAVE-1",12)&&strncmp(line,"PACKAGE_ID=",11)&&strncmp(line,"GAME_VERSION=",13)){char*tab=strchr(line,'\t');if(tab){*tab=0;if(!strcmp(line,key)){strcat(out,key);strcat(out,"\t");for(const unsigned char*p=(const unsigned char*)json;*p;p++){unsigned char q[2];hex(q,*p);strncat(out,(char*)q,2);}strcat(out,"\n");replaced=1;}else{strcat(out,line);strcat(out,"\t");strcat(out,tab+1);strcat(out,"\n");}}}line=strtok(NULL,"\n");}}
2026-10-06T01:44:34.3909849Z n1_extracted/f9_release/native/src/host.c:61:const char*frozt_host_save_get_json(FroztHost*h,const char*key){if(!h||!save_key_ok(key)||!ensure_save_path(h))return NULL;char*old=NULL;if(!save_matches(h,&old))return NULL;h->save_read_buffer[0]=0;char*line=strtok(old,"\n");while(line){if(strncmp(line,"FROZT-SAVE-1",12)&&strncmp(line,"PACKAGE_ID=",11)&&strncmp(line,"GAME_VERSION=",13)){char*tab=strchr(line,'\t');if(tab){*tab=0;if(!strcmp(line,key)){const char*hexv=tab+1;size_t n=strlen(hexv);if(n%2||n/2>=sizeof h->save_read_buffer){free(old);return NULL;}for(size_t i=0;i<n;i+=2){int a=unhex(hexv[i]),b=unhex(hexv[i+1]);if(a<0||b<0){free(old);return NULL;}h->save_read_buffer[i/2]=(char)((a<<4)|b);}h->save_read_buffer[n/2]=0;free(old);return h->save_read_buffer;}}}line=strtok(NULL,"\n");}free(old);return NULL;}
2026-10-06T01:44:34.3913060Z n1_extracted/f9_release/native/src/host.c:62:int frozt_host_save_delete(FroztHost*h,const char*key){if(!h||!save_key_ok(key)||!ensure_save_path(h))return 0;char*old=NULL;if(!save_matches(h,&old))return 1;char header[512],*out=calloc(1,strlen(old)+512);if(!out){free(old);return 0;}snprintf(header,sizeof header,"FROZT-SAVE-1\nPACKAGE_ID=%s\nGAME_VERSION=%s\n",h->package_id,h->game_version);strcat(out,header);char*line=strtok(old,"\n");while(line){if(strncmp(line,"FROZT-SAVE-1",12)&&strncmp(line,"PACKAGE_ID=",11)&&strncmp(line,"GAME_VERSION=",13)){char*tab=strchr(line,'\t');if(tab){*tab=0;if(strcmp(line,key)){strcat(out,line);strcat(out,"\t");strcat(out,tab+1);strcat(out,"\n");}}}line=strtok(NULL,"\n");}int ok=write_save(h,out);free(old);free(out);return ok;}
2026-10-06T01:44:34.3914810Z n1_extracted/f9_release/native/src/package.c:1:#include "frozt_package.h"
2026-10-06T01:44:34.3915547Z n1_extracted/f9_release/native/src/package.c:8:struct FroztPackage { const unsigned char* bytes; size_t len; struct Entry* entries; size_t count; FroztPackageInfo info; };
2026-10-06T01:44:34.3918173Z n1_extracted/f9_release/native/src/package.c:15:static int parse_meta(FroztPackage*p,const unsigned char*d,size_t n,char*e,size_t en){char*text=(char*)malloc(n+1);if(!text)return 0;memcpy(text,d,n);text[n]=0;int seen[4]={0};char*line=text;while(line){char*next=strchr(line,'\n');if(next)*next++=0;while(*line&&(*line=='\r'||isspace((unsigned char)*line)))line++;if(*line&&*line!='#'){char*k=line;char*eq=strchr(k,'=');if(!eq){free(text);err(e,en,"invalid game info");return 0;}*eq++=0;while(*eq&&isspace((unsigned char)*eq))eq++;char*end=eq+strlen(eq);while(end>eq&&isspace((unsigned char)end[-1]))*--end=0;if(!strcmp(k,"game_name")){snprintf(p->info.game_name,sizeof p->info.game_name,"%s",eq);seen[0]=1;}else if(!strcmp(k,"game_version")){snprintf(p->info.game_version,sizeof p->info.game_version,"%s",eq);seen[1]=1;}else if(!strcmp(k,"frozt_version")){snprintf(p->info.frozt_version,sizeof p->info.frozt_version,"%s",eq);seen[2]=1;}else if(!strcmp(k,"package_id")){snprintf(p->info.package_id,sizeof p->info.package_id,"%s",eq);seen[3]=1;}}
2026-10-06T01:44:34.3921345Z n1_extracted/f9_release/native/src/package.c:16: if(!next)break; line=next;}free(text);for(int i=0;i<4;i++)if(!seen[i]){err(e,en,"invalid game info");return 0;}if(!p->info.game_name[0]||!version3(p->info.game_version,(int[3]){0,0,0})||!version_at_least("0.9.0",p->info.frozt_version)||!safe_path(p->info.package_id)||!p->info.package_id[0]){err(e,en,"invalid game info");return 0;}return 1;}
2026-10-06T01:44:34.3922698Z n1_extracted/f9_release/native/src/package.c:17:static int find_entry(FroztPackage*p,const char*path){if(!safe_path(path))return -1;for(size_t i=0;i<p->count;i++)if(!strcmp(p->entries[i].path,path))return (int)i;return -1;}
2026-10-06T01:44:34.3927058Z n1_extracted/f9_release/native/src/package.c:18:FroztPackage* frozt_package_open_memory(const unsigned char*b,size_t len,char*error,size_t error_len){if(!b||len<22){err(error,error_len,"invalid .fzt container");return NULL;}size_t eocd=(size_t)-1;for(size_t i=len-22;i>0;i--){if(u32(b,i)==0x06054b50){eocd=i;break;}}if(eocd==(size_t)-1){err(error,error_len,"invalid .fzt container");return NULL;}unsigned short count=u16(b,eocd+10);unsigned int cds=u32(b,eocd+12),cdo=u32(b,eocd+16);if((size_t)cdo+(size_t)cds>len){err(error,error_len,"invalid .fzt container");return NULL;}FroztPackage*p=calloc(1,sizeof*p);if(!p)return NULL;p->bytes=b;p->len=len;p->entries=calloc(count,sizeof*p->entries);if(!p->entries){free(p);return NULL;}size_t off=cdo;for(unsigned short i=0;i<count;i++){if(off+46>len||u32(b,off)!=0x02014b50){err(error,error_len,"invalid .fzt container");frozt_package_close(p);return NULL;}unsigned short method=u16(b,off+10),nl=u16(b,off+28),xl=u16(b,off+30),cl=u16(b,off+32);if(off+46+(size_t)nl+xl+cl>len){err(error,error_len,"invalid .fzt container");frozt_package_close(p);return NULL;}char*name=malloc(nl+1);if(!name){frozt_package_close(p);return NULL;}memcpy(name,b+off+46,nl);name[nl]=0;if(name[nl-1]=='/'){free(name);off+=46+nl+xl+cl;continue;}if(!safe_path(name)){free(name);err(error,error_len,"invalid .fzt path");frozt_package_close(p);return NULL;}if(method!=0){free(name);err(error,error_len,"unsupported .fzt compression");frozt_package_close(p);return NULL;}size_t lo=u32(b,off+42);if(lo+30>len||u32(b,lo)!=0x04034b50){free(name);err(error,error_len,"invalid .fzt local header");frozt_package_close(p);return NULL;}unsigned short lnl=u16(b,lo+26),lxl=u16(b,lo+28);size_t data=lo+30+(size_t)lnl+lxl, size=u32(b,off+20), usize=u32(b,off+24);if(data+size>len){free(name);err(error,error_len,"invalid .fzt entry");frozt_package_close(p);return NULL;}p->entries[p->count++]=(struct Entry){name,data,size,usize,method};off+=46+nl+xl+cl;}
2026-10-06T01:44:34.3931616Z n1_extracted/f9_release/native/src/package.c:19: int mi=find_entry(p,"metadata/meta.txt"), main=find_entry(p,"main.frozt"); if(mi<0||main<0||!parse_meta(p,p->bytes+p->entries[mi].data_offset,p->entries[mi].size,error,error_len)){if(mi<0||main<0)err(error,error_len,"invalid game info");frozt_package_close(p);return NULL;}return p;}
2026-10-06T01:44:34.3932804Z n1_extracted/f9_release/native/src/package.c:20:void frozt_package_close(FroztPackage*p){if(!p)return;for(size_t i=0;i<p->count;i++)free(p->entries[i].path);free(p->entries);free(p);}
2026-10-06T01:44:34.3933692Z n1_extracted/f9_release/native/src/package.c:21:int frozt_package_info(const FroztPackage*p,FroztPackageInfo*out){if(!p||!out)return 0;*out=p->info;return 1;}
2026-10-06T01:44:34.3934893Z n1_extracted/f9_release/native/src/package.c:22:const unsigned char* frozt_package_read(const FroztPackage*p,const char*path,size_t*out_len){if(!p)return NULL;int i=find_entry((FroztPackage*)p,path);if(i<0)return NULL;if(out_len)*out_len=p->entries[i].size;return p->bytes+p->entries[i].data_offset;}
2026-10-06T01:44:34.3935992Z n1_extracted/f9_release/native/src/package.c:23:int frozt_package_has(const FroztPackage*p,const char*path){return frozt_package_read(p,path,NULL)!=NULL;}
2026-10-06T01:44:34.3938321Z n1_extracted/f9_release/native/src/host_smoke.c:7:int main(int argc,char**argv){FroztHostConfig c={0};c.render=render;c.diagnostic=diag;c.seed=1;c.save_root=argc>2?argv[2]:NULL;FroztHost*h=frozt_host_create(&c);if(!h)return 2;if(argc>1){if(!frozt_host_load_bundle(h,argv[1])){frozt_host_destroy(h);return 3;}FroztPackageInfo info;if(!frozt_host_package_info(h,&info)){frozt_host_destroy(h);return 4;}if(!frozt_host_start(h,info.package_id)){frozt_host_destroy(h);return 5;}if(c.save_root){if(!frozt_host_save_put_json(h,"smoke","42")){frozt_host_destroy(h);return 6;}const char*v=frozt_host_save_get_json(h,"smoke");if(!v||strcmp(v,"42")){frozt_host_destroy(h);return 7;}}}else if(!frozt_host_start(h,"f6.smoke")){frozt_host_destroy(h);return 8;}frozt_host_resize(h,1280,720,1.0);frozt_host_tick(h,16.6666667);frozt_host_suspend(h);frozt_host_resume(h);frozt_host_stop(h);frozt_host_destroy(h);puts("F7 native host smoke: PASS");return 0;}
2026-10-06T01:44:34.4039911Z ##[group]Run cd n1_extracted/f9_release/android
2026-10-06T01:44:34.4040387Z [36;1mcd n1_extracted/f9_release/android[0m
2026-10-06T01:44:34.4040788Z [36;1m[0m
2026-10-06T01:44:34.4041242Z [36;1mgradle \[0m
2026-10-06T01:44:34.4041606Z [36;1m  --no-daemon \[0m
2026-10-06T01:44:34.4041996Z [36;1m  --console=plain \[0m
2026-10-06T01:44:34.4042389Z [36;1m  --stacktrace \[0m
2026-10-06T01:44:34.4042777Z [36;1m  assembleDebug[0m
2026-10-06T01:44:34.4092164Z shell: /usr/bin/bash -e {0}
2026-10-06T01:44:34.4092547Z ##[endgroup]
2026-10-06T01:44:45.7680425Z 
2026-10-06T01:44:45.7681323Z Welcome to Gradle 9.8.0!
2026-10-06T01:44:45.7681541Z 
2026-10-06T01:44:45.7684868Z Here are the highlights of this release:
2026-10-06T01:44:45.7685259Z  - Java 27 support
2026-10-06T01:44:45.7685412Z  - Maven mirror settings reuse
2026-10-06T01:44:45.7685562Z  - Linked problem locations in build output
2026-10-06T01:44:45.7685669Z 
2026-10-06T01:44:45.7685878Z For more details see https://docs.gradle.org/9.8.0/release-notes.html
2026-10-06T01:44:45.7686027Z 
2026-10-06T01:44:47.0674741Z To honour the JVM settings for this build a single-use Daemon process will be forked. For more on this, please refer to https://docs.gradle.org/9.8.0/userguide/gradle_daemon.html#sec:disabling_the_daemon in the Gradle documentation.
2026-10-06T01:44:56.3674001Z Daemon will be stopped at the end of the build 
2026-10-06T01:45:27.6683550Z 
2026-10-06T01:45:27.6687095Z > Configure project :app
2026-10-06T01:45:27.6689057Z Checking the license for package NDK (Side by side) 26.1.10909125 in /usr/local/lib/android/sdk/licenses
2026-10-06T01:45:27.6690080Z License for package NDK (Side by side) 26.1.10909125 accepted.
2026-10-06T01:45:27.6691088Z Preparing "Install NDK (Side by side) 26.1.10909125 v.26.1.10909125".
2026-10-06T01:45:54.8673568Z "Install NDK (Side by side) 26.1.10909125 v.26.1.10909125" ready.
2026-10-06T01:45:54.8673949Z Installing NDK (Side by side) 26.1.10909125 in /usr/local/lib/android/sdk/ndk/26.1.10909125
2026-10-06T01:45:54.8674237Z "Install NDK (Side by side) 26.1.10909125 v.26.1.10909125" complete.
2026-10-06T01:45:55.0696482Z "Install NDK (Side by side) 26.1.10909125 v.26.1.10909125" finished.
2026-10-06T01:45:55.9687172Z 
2026-10-06T01:45:55.9688066Z > Task :app:preBuild UP-TO-DATE
2026-10-06T01:45:55.9688611Z > Task :app:preDebugBuild UP-TO-DATE
2026-10-06T01:45:55.9689071Z > Task :app:mergeDebugNativeDebugMetadata NO-SOURCE
2026-10-06T01:45:56.0674139Z > Task :app:javaPreCompileDebug
2026-10-06T01:45:56.0674707Z > Task :app:generateDebugResValues
2026-10-06T01:45:56.0675199Z > Task :app:checkDebugAarMetadata
2026-10-06T01:45:56.0675598Z > Task :app:mapDebugSourceSetPaths
2026-10-06T01:45:56.0675970Z > Task :app:generateDebugResources
2026-10-06T01:45:56.1674306Z > Task :app:packageDebugResources
2026-10-06T01:45:56.2673314Z > Task :app:mergeDebugResources
2026-10-06T01:45:56.9686212Z > Task :app:createDebugCompatibleScreenManifests
2026-10-06T01:45:56.9686937Z > Task :app:extractDeepLinksDebug
2026-10-06T01:45:56.9687329Z > Task :app:parseDebugLocalResources
2026-10-06T01:45:57.0673936Z > Task :app:processDebugMainManifest
2026-10-06T01:45:58.2675135Z > Task :app:processDebugManifest
2026-10-06T01:45:58.2677234Z > Task :app:mergeDebugShaders
2026-10-06T01:45:58.2677496Z > Task :app:compileDebugShaders NO-SOURCE
2026-10-06T01:45:58.2677900Z > Task :app:generateDebugAssets UP-TO-DATE
2026-10-06T01:45:58.2678172Z > Task :app:mergeDebugAssets
2026-10-06T01:45:58.3674583Z > Task :app:processDebugJavaRes NO-SOURCE
2026-10-06T01:45:58.3701289Z > Task :app:processDebugManifestForPackage
2026-10-06T01:45:58.3701680Z > Task :app:compressDebugAssets
2026-10-06T01:45:58.7762093Z > Task :app:checkDebugDuplicateClasses
2026-10-06T01:45:58.7791247Z > Task :app:desugarDebugFileDependencies
2026-10-06T01:45:58.8673738Z > Task :app:mergeExtDexDebug
2026-10-06T01:45:58.8674071Z > Task :app:mergeLibDexDebug
2026-10-06T01:45:58.8674237Z > Task :app:mergeDebugJavaResource
2026-10-06T01:45:58.8675107Z > Task :app:processDebugResources
2026-10-06T01:46:00.2701752Z 
2026-10-06T01:46:00.2731821Z > Task :app:configureCMakeDebug[arm64-v8a]
2026-10-06T01:46:00.2732325Z Checking the license for package CMake 3.22.1 in /usr/local/lib/android/sdk/licenses
2026-10-06T01:46:00.2732804Z License for package CMake 3.22.1 accepted.
2026-10-06T01:46:00.2733092Z Preparing "Install CMake 3.22.1 v.3.22.1".
2026-10-06T01:46:00.2733373Z "Install CMake 3.22.1 v.3.22.1" ready.
2026-10-06T01:46:00.2733712Z Installing CMake 3.22.1 in /usr/local/lib/android/sdk/cmake/3.22.1
2026-10-06T01:46:00.2734073Z "Install CMake 3.22.1 v.3.22.1" complete.
2026-10-06T01:46:00.2734342Z "Install CMake 3.22.1 v.3.22.1" finished.
2026-10-06T01:46:00.2734602Z C/C++: CMake Warning:
2026-10-06T01:46:00.2734906Z C/C++:   Manually-specified variables were not used by the project:
2026-10-06T01:46:00.2735257Z C/C++:     FROZT_ANDROID_SHELL
2026-10-06T01:46:01.4672930Z 
2026-10-06T01:46:01.4673630Z > Task :app:compileDebugJavaWithJavac
2026-10-06T01:46:01.7682556Z > Task :app:dexBuilderDebug
2026-10-06T01:46:01.9673305Z > Task :app:mergeProjectDexDebug
2026-10-06T01:46:01.9673620Z > Task :app:buildCMakeDebug[arm64-v8a]
2026-10-06T01:46:02.0672748Z 
2026-10-06T01:46:02.0673357Z > Task :app:configureCMakeDebug[armeabi-v7a]
2026-10-06T01:46:02.0682321Z C/C++: CMake Warning:
2026-10-06T01:46:02.0682829Z C/C++:   Manually-specified variables were not used by the project:
2026-10-06T01:46:02.0683265Z C/C++:     FROZT_ANDROID_SHELL
2026-10-06T01:46:02.1672559Z 
2026-10-06T01:46:02.1677226Z > Task :app:buildCMakeDebug[armeabi-v7a]
2026-10-06T01:46:02.2672734Z 
2026-10-06T01:46:02.2675682Z > Task :app:configureCMakeDebug[x86]
2026-10-06T01:46:02.2676267Z C/C++: CMake Warning:
2026-10-06T01:46:02.2676747Z C/C++:   Manually-specified variables were not used by the project:
2026-10-06T01:46:02.2677227Z C/C++:     FROZT_ANDROID_SHELL
2026-10-06T01:46:02.2677508Z 
2026-10-06T01:46:02.2677867Z > Task :app:buildCMakeDebug[x86]
2026-10-06T01:46:02.3721783Z 
2026-10-06T01:46:02.3732082Z > Task :app:configureCMakeDebug[x86_64]
2026-10-06T01:46:02.3768034Z C/C++: CMake Warning:
2026-10-06T01:46:02.3768543Z C/C++:   Manually-specified variables were not used by the project:
2026-10-06T01:46:02.3769032Z C/C++:     FROZT_ANDROID_SHELL
2026-10-06T01:46:02.4673564Z 
2026-10-06T01:46:02.4674309Z > Task :app:buildCMakeDebug[x86_64]
2026-10-06T01:46:02.4674635Z > Task :app:mergeDebugJniLibFolders
2026-10-06T01:46:02.4674896Z > Task :app:mergeDebugNativeLibs
2026-10-06T01:46:02.9692071Z > Task :app:validateSigningDebug
2026-10-06T01:46:02.9692978Z > Task :app:writeDebugAppMetadata
2026-10-06T01:46:03.0674150Z > Task :app:writeDebugSigningConfigVersions
2026-10-06T01:46:03.0678447Z > Task :app:stripDebugDebugSymbols
2026-10-06T01:46:03.1673408Z > Task :app:packageDebug
2026-10-06T01:46:03.1673981Z > Task :app:createDebugApkListingFileRedirect
2026-10-06T01:46:03.1674368Z > Task :app:assembleDebug
2026-10-06T01:46:03.1674579Z 
2026-10-06T01:46:03.1675233Z [Incubating] Problems report is available at: file:///home/runner/work/FROZT-ENGINE/FROZT-ENGINE/n1_extracted/f9_release/android/build/reports/problems/problems-report.html
2026-10-06T01:46:03.1675898Z 
2026-10-06T01:46:03.1676206Z Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.
2026-10-06T01:46:03.1677122Z 
2026-10-06T01:46:03.1677583Z You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.
2026-10-06T01:46:03.1678140Z 
2026-10-06T01:46:03.1678691Z For more on this, please refer to https://docs.gradle.org/9.8.0/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.
2026-10-06T01:46:03.1679321Z 
2026-10-06T01:46:03.1679485Z BUILD SUCCESSFUL in 1m 27s
2026-10-06T01:46:03.1679789Z 41 actionable tasks: 41 executed
2026-10-06T01:46:03.1680391Z Consider enabling configuration cache to speed up this build: https://docs.gradle.org/9.8.0/userguide/configuration_cache_enabling.html
2026-10-06T01:46:03.3077652Z ##[group]Run echo "===== GENERATED APK ====="
2026-10-06T01:46:03.3077880Z [36;1mecho "===== GENERATED APK ====="[0m
2026-10-06T01:46:03.3078032Z [36;1m[0m
2026-10-06T01:46:03.3078170Z [36;1mfind n1_extracted/f9_release/android \[0m
2026-10-06T01:46:03.3078362Z [36;1m  -type f \[0m
2026-10-06T01:46:03.3078489Z [36;1m  -name "*.apk" \[0m
2026-10-06T01:46:03.3078633Z [36;1m  -printf "%p (%s bytes)\n" \[0m
2026-10-06T01:46:03.3078779Z [36;1m  | sort[0m
2026-10-06T01:46:03.3132214Z shell: /usr/bin/bash -e {0}
2026-10-06T01:46:03.3132364Z ##[endgroup]
2026-10-06T01:46:03.3196121Z ===== GENERATED APK =====
2026-10-06T01:46:03.3258347Z n1_extracted/f9_release/android/app/build/outputs/apk/debug/app-debug.apk (150481 bytes)
2026-10-06T01:46:03.3279876Z ##[group]Run echo ""
2026-10-06T01:46:03.3280036Z [36;1mecho ""[0m
2026-10-06T01:46:03.3280174Z [36;1mecho "=========================================="[0m
2026-10-06T01:46:03.3280379Z [36;1mecho "FROZT ANDROID RUNTIME DIAGNOSTIC COMPLETE"[0m
2026-10-06T01:46:03.3280577Z [36;1mecho "=========================================="[0m
2026-10-06T01:46:03.3280738Z [36;1mecho ""[0m
2026-10-06T01:46:03.3281047Z [36;1mecho "The workflow intentionally made no source changes."[0m
2026-10-06T01:46:03.3281302Z [36;1mecho "Its purpose is to identify the current black-screen"[0m
2026-10-06T01:46:03.3281549Z [36;1mecho "runtime blocker before we modify the N1 architecture."[0m
2026-10-06T01:46:03.3327859Z shell: /usr/bin/bash -e {0}
2026-10-06T01:46:03.3328006Z ##[endgroup]
2026-10-06T01:46:03.3386713Z 
2026-10-06T01:46:03.3386833Z ==========================================
2026-10-06T01:46:03.3387076Z FROZT ANDROID RUNTIME DIAGNOSTIC COMPLETE
2026-10-06T01:46:03.3387260Z ==========================================
2026-10-06T01:46:03.3387356Z 
2026-10-06T01:46:03.3387434Z The workflow intentionally made no source changes.
2026-10-06T01:46:03.3387632Z Its purpose is to identify the current black-screen
2026-10-06T01:46:03.3387834Z runtime blocker before we modify the N1 architecture.
2026-10-06T01:46:03.3466808Z Post job cleanup.
2026-10-06T01:46:03.4021586Z [command]/usr/bin/git version
2026-10-06T01:46:03.4047032Z git version 2.55.0
2026-10-06T01:46:03.4071849Z Temporarily overriding HOME='/home/runner/work/_temp/6023a5c6-4e90-4380-9534-a153f3ec0c3f' before making global git config changes
2026-10-06T01:46:03.4072526Z Adding repository directory to the temporary git global config as a safe directory
2026-10-06T01:46:03.4075775Z [command]/usr/bin/git config --global --add safe.directory /home/runner/work/FROZT-ENGINE/FROZT-ENGINE
2026-10-06T01:46:03.4107939Z [command]/usr/bin/git config --local --name-only --get-regexp core\.sshCommand
2026-10-06T01:46:03.4135876Z [command]/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'core\.sshCommand' && git config --local --unset-all 'core.sshCommand' || :"
2026-10-06T01:46:03.4332956Z [command]/usr/bin/git config --local --name-only --get-regexp http\.https\:\/\/github\.com\/\.extraheader
2026-10-06T01:46:03.4366145Z http.https://github.com/.extraheader
2026-10-06T01:46:03.4374351Z [command]/usr/bin/git config --local --unset-all http.https://github.com/.extraheader
2026-10-06T01:46:03.4406008Z [command]/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'http\.https\:\/\/github\.com\/\.extraheader' && git config --local --unset-all 'http.https://github.com/.extraheader' || :"
2026-10-06T01:46:03.4608745Z [command]/usr/bin/git config --local --name-only --get-regexp ^includeIf\.gitdir:
2026-10-06T01:46:03.4641080Z [command]/usr/bin/git submodule foreach --recursive git config --local --show-origin --name-only --get-regexp remote.origin.url
2026-10-06T01:46:03.4944769Z Cleaning up orphan processes
2026-10-06T01:46:03.5150557Z ##[warning]Node.js 20 is deprecated. The following actions target Node.js 20 but are being forced to run on Node.js 24: actions/checkout@v4. For more information see: https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/
