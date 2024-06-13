package com.ods;

import java.io.FileInputStream;
import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

@SpringBootApplication
public class BackApplication {

	public static void main(String[] args) {
//		SpringApplication.run(BackApplication.class, args);
		
		try {
            FileInputStream serviceAccount = new FileInputStream("path/to/serviceAccountKey.json");

            FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .setDatabaseUrl("https://console.firebase.google.com/u/0/project/fundaciosplai/database/fundaciosplai-default-rtdb/data/~2F?hl=es-419")
                .build();

            FirebaseApp.initializeApp(options);

            DatabaseReference ref = FirebaseDatabase.getInstance().getReference("restricted_access/secret_document");
            ref.setValue("Hello, World!", null);
        } catch (IOException e) {
            e.printStackTrace();
        }
		
	}

}
