use std::fs;

#[tauri::command]
fn fetch_scene(scene: &str) -> Result<String, String> {
    let scene_json_path = format!("./data/{scene}.json");

    match fs::read_to_string(&scene_json_path) {
        Ok(scene_json) => Ok(scene_json),
        Err(err) => Err(format!(
            "failed to open scene at path: {}, error: {}",
            scene_json_path, err
        )),
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![fetch_scene])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
