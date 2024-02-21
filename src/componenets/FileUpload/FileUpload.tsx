import "./FileUpload.css";

export function FileUpload() {
  return (
    <div className="file-upload-container">
      <h2 className="file-upload-cta">Upload a File</h2>
      <p className="file-upload-desc">
        Upload a CSV file here, we only accept Comma Seperated Values for now in
        the future we are going to add more, if you see one you do now have feel
        free to make a PR you fool
      </p>
    </div>
  );
}
