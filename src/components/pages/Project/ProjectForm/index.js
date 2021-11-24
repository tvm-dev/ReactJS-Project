

function ProjectForm(){
    return (
        <form>
            <div>
                <input type="text" placeholder="Type the project name here" />
            </div>
            <div>
                <input type="number" placeholder="Type the total value of project" />
            </div>
            <div>
                <select name="category_id">
                    <option disabled>Select Category:</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Create Project now" />
            </div>
        </form>
    )
}

export default ProjectForm